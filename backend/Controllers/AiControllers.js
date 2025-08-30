// controllers/aiController.js
const summarizeText = (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "No text provided" });

  // Temporary summarization logic (mock)
  const summary = text.length > 100 ? text.slice(0, 100) + "..." : text;

  res.json({ summary });
};

module.exports = { summarizeText };
