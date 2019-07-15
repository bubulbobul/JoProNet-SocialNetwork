const express = require("express");
const router = express.Router();

// @route   GET apt/posts
// @desc    Test route
// @access  Public
router.get("/", (req, res) => res.send("Posts route"));

module.exports = router;
