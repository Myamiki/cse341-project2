const express = require("express");
const router = express.Router();

router.use("/movies", require("./movies"));
router.use("/actors", require("./actors"));

// Authentication routes
router.use("/auth", require("./auth"));

module.exports = router;