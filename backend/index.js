
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const connectDB = require("./config/db.js");
const uploadRoutes = require("./routes/UploadRoutes.js");
const videoRoutes = require("./routes/VideoRoutes.js");
const aiRoutes = require("./routes/AiRoutes.js");
const scriptRoutes = require("./routes/ScriptRoutes.js");
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import uploadRoutes from "./routes/uploadRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
const scriptRoutes = require('./routes/scriptRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Serve static uploads folder
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Routes
app.use("/api/upload", uploadRoutes);
app.use("/api/video", videoRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/script", scriptRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
==
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.use("/api/upload", uploadRoutes);
app.use("/api/video", videoRoutes);
app.use("/api/ai", aiRoutes);
app.use('/api/script', scriptRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
