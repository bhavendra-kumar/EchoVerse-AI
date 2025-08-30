const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const connectDB = require("./config/db.js");
const uploadRoutes = require("./routes/UploadRoutes.js");
const videoRoutes = require("./routes/VideoRoutes.js");
const aiRoutes = require("./routes/AiRoutes.js");
const scriptRoutes = require("./routes/ScriptRoutes.js");

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
