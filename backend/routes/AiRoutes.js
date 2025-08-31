const express = require("express");
const OpenAI = require("openai");

const router = express.Router();

// Use OpenAI key from .env
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "f309f7ff97e58b124f3b481eb2d4bc6a9432943b44998f03a8b047bbabe2e280"
});

router.post("/summarize", async (req, res) => {
  const { text } = req.body;

  if (!text) return res.status(400).json({ error: "Text is required" });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "Summarize the following text into concise key points:" },
        { role: "user", content: text },
      ],
      max_tokens: 300
    });

    const summary = response.choices[0].message.content;
    res.json({ summary });
  } catch (err) {
    console.error("Summarization error:", err);
    res.status(500).json({ error: "Failed to summarize text" });
  }
});

module.exports = router;
