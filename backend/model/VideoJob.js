import mongoose from "mongoose";

const videoJobSchema = new mongoose.Schema({
  sourceText: { type: String, required: true },
  summary: { type: String },
  translation: { type: String },
  videoUrl: { type: String },
  status: { type: String, default: "pending" }, // pending | processing | done | failed
}, { timestamps: true });

export default mongoose.model("VideoJob", videoJobSchema);
