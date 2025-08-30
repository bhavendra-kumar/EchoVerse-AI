
const mongoose = require("mongoose");
import mongoose from "mongoose";

const videoJobSchema = new mongoose.Schema({
  sourceText: { type: String, required: true },
  summary: { type: String },
  videoUrl: { type: String },
  status: { type: String, default: "processing" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("VideoJob", videoJobSchema);

  translation: { type: String },
  videoUrl: { type: String },
  status: { type: String, default: "pending" }, // pending | processing | done | failed
}, { timestamps: true });

export default mongoose.model("VideoJob", videoJobSchema);

