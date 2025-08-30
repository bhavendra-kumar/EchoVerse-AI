const express = require('express');
const { callGemini } = require('../Services/GeminiServices');
const router = express.Router();

router.post('/generate-script', async (req, res) => {
  const { text, audienceLevel = 'general' } = req.body;

  // Prompt for Gemini
  const prompt = `
Summarize the following text into a concise video script for audience level: ${audienceLevel}.
1) Provide a short summary (3-6 sentences).
2) Provide a JSON array named "scenes" with 5 scenes. Each scene object must have:
  - title (string)
  - bullets (array of short bullet strings)
  - script_text (40-80 words, narratable)
  - visual_intent (object with type and tags)
Return ONLY the summary followed by the JSON array (no extra commentary).
Text:
"""${text}"""
`;

  try {
    const raw = await callGemini(prompt);
    res.json({ ok: true, output: raw });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

module.exports = router;