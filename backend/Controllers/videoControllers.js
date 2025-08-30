// controllers/videoController.js
const VideoJob = require("../model/VideoJob");
const axios = require("axios");

const createVideoJob = async (req, res) => {
  try {
    const { sourceText } = req.body;

    const newJob = await VideoJob.create({ sourceText, status: "processing" });

    // Call Gemini API → summarization
    const geminiRes = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
      {
        contents: [{ parts: [{ text: `Summarize: ${sourceText}` }] }],
      },
      { params: { key: process.env.GEMINI_API_KEY } }
    );

    const summary = geminiRes.data.candidates[0].content.parts[0].text;

    newJob.summary = summary;
    newJob.status = "done";
    newJob.videoUrl = "http://localhost:5000/videos/dummy.mp4"; // placeholder
    await newJob.save();

    res.json({ jobId: newJob._id, summary });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Video job creation failed" });
  }
};

const getVideoJob = async (req, res) => {
  try {
    const job = await VideoJob.findById(req.params.id);
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: "Error fetching job" });
  }
};

module.exports = { createVideoJob, getVideoJob };
