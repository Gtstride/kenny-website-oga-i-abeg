import express from "express";

const router = express.Router();


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

module.exports = router;
