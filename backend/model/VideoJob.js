const mongoose = require("mongoose");

const videoJobSchema = new mongoose.Schema({
  sourceText: { type: String, required: true },
  summary: { type: String },
  videoUrl: { type: String },
  status: { type: String, default: "processing" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("VideoJob", videoJobSchema);
