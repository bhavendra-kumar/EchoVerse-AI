// backend/services/geminiService.js
const axios = require('axios');
const API_KEY = process.env.GEMINI_API_KEY; // put your API key in .env file
const MODEL = 'gemini-pro'; // model name
const BASE = 'https://generativelanguage.googleapis.com/v1beta';

async function callGemini(prompt) {
  try {
    const url = `${BASE}/models/${MODEL}:generateContent?key=${API_KEY}`;
    const body = {
      contents: [{ parts: [{ text: prompt }] }]
    };

    const resp = await axios.post(url, body, {
      headers: { 'Content-Type': 'application/json' }
    });

    // Gemini API returns text in a slightly tricky format
    const raw = resp.data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return raw;
  } catch (err) {
    console.error('Gemini error:', err.response?.data || err.message);
    throw err;
  }
}

module.exports = { callGemini };
