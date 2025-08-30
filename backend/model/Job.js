// models/Job.js
const mongoose = require('mongoose');
const SceneSchema = new mongoose.Schema({
  idx: Number,
  title: String,
  bullets: [String],
  script_text: String,
  visual_intent: Object,
  duration: Number,
  tts_url: String
}, { _id: false });

const JobSchema = new mongoose.Schema({
  sourceText: { type: String, required: true },
  sourceType: { type: String, default: 'text' },
  settings: Object,
  status: { type: String, default: 'pending' }, // pending, processing, completed, failed
  summary: String,
  scenes: [SceneSchema],
  videoUrl: String,
  error: String
}, { timestamps: true });

module.exports = mongoose.model('Job', JobSchema);