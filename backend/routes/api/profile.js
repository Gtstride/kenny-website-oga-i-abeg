import express from "express";

const router = express.Router();


/**
 * @route GET api/profile/test
 * @description Test profile route
 * @access Public Access
 * @authored by Godstime
 * @copyright to Godstime Agho
 */
router.get("/test", (req, res) => {
  res.json({
    status: "Success",
    message: "This Profile thing seems to works just fine!!"
  });
});

module.exports = router;
