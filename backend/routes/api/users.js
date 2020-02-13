import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";
import keys from "../../config/keys";

const router = express.Router();

// Load Input Validation
import validateUserRegisterInput from "../../validation/register";
import validateUserSignInInput from "../../validation/signin";

// Load user model
const User = require("../../models/User");

/**
 * @route GET api/users/test
 * @description Test users route
 * @access Public Access
 * @authored by Godstime
 * @copyright to Godstime Agho
 */
router.get("/test", (req, res) => {
  res.json({
    status: "Success",
    message: "This users routes works and no assiles"
  });
});

/**
 * @route POST /api/v1/users/register
 * @description Register users route
 * @access Public Access
 * @authored by Godstime
 * @copyright to Godstime Agho
 */

router.post("/register", (req, res) => {
  try {
    const { errors, isValid } = validateUserRegisterInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email, username: req.body.username }).then(
      user => {
        if (user) {
          return res.status(400).json({ email: "Email already exist" });
        } else {
          const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            password2: req.body.password2
          });

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser.save();
              // .then(user => res.json(user));
              res.status(201).json({
                status: "Successfull",
                message: "User's account successfully created."
              });
            });
          });
        }
      }
    );
  } catch (err) {
    res.status(400).json({
      status: "Error",
      data: {
        message:
          "Account couid not be created, please make sure you are providing the correct details.",
        err: err.message
      }
    });
  }
});

/**
 * @route POST /api/v1/users/signin
 * @description Users route / Return User a Token
 * @access Public Access
 * @authored by Godstime
 * @copyright to Godstime Agho
 */

router.post("/signin", (req, res) => {
  try {
    const { errors, isValid } = validateUserSignInInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const { email, password } = req.body;

    User.findOne({ email }).then(user => {
      if (!user) {
        errors.email = "User does not exist";
        return res.status(404).json({
          status: "There's been an error",
          // errors: errors.message
          errors
        });
      }

      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const payload = { email: user.email };
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 1200 },
            (errors, token) => {
              return res.status(201).json({
                success: true,
                token: `Bearer ${token}`,
                email
              });
            }
          );
        } else {
          errors.password = "Password incorrect";
          return res.status(404).json({
            status: "Wrong Password supplied",
            // errors: errors.message
            errors
          });
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
});

// /**
//  * @route GET api/users/current
//  * @desc Return current user
//  * @access Private
//  */
// router.get(
//   '/current',
//   passport.authenticate('jwt', {
//     session: false,
//   }),
//   (req, res) => {
//     res.json({
//       id: req.user.id,
//       name: req.user.name,
//       email: req.user.email,
//     });
//   },
// );

module.exports = router;
