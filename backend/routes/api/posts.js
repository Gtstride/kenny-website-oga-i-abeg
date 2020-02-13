import express from "express";

const router = express.Router();


/**
 * @route GET api/posts/test
 * @description Test post route
 * @access Public Access
 * @authored by Godstime
 * @copyright to Godstime Agho
 */
router.get("/test", (req, res) => {
  res.json({
    status: "Success",
    message: "Great Post you have got here!"
  });
});

module.exports = router;
