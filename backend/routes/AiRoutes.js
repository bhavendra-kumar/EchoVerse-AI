// routes/AiRoutes.js
const express = require("express");
const { summarizeText } = require("../Controllers/AiControllers"); // exact lowercase path

const router = express.Router();

router.post("/summarize", summarizeText);

module.exports = router;
