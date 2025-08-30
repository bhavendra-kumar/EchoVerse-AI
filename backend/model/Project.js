const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  sourceType: String,   // file, url, text
  sourceUri: String,
  style: String,        // explainer, cinematic, news
  level: String,        // student, researcher
  languageIn: { type: String, default: "en" },
  status: { type: String, default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("Project", ProjectSchema);
