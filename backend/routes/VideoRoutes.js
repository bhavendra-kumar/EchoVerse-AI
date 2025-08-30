// routes/VideoRoutes.js
const express = require("express");
const { createVideoJob, getVideoJob } = require("../Controllers/videoControllers"); // fixed path

const router = express.Router();

router.post("/create", createVideoJob);
router.get("/:id", getVideoJob);

module.exports = router;
