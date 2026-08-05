const express = require("express");
const router = express.Router();

// API Routes
router.use("/movies", require("./movies"));
router.use("/actors", require("./actors"));
router.use("/directors", require("./directors"));
router.use("/reviews", require("./reviews"));

// Authentication routes
router.use("/auth", require("./auth"));

module.exports = router;