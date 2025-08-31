const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors"); 

const connectDB = require("./config/db.js");
const uploadRoutes = require("./routes/UploadRoutes.js");
const videoRoutes = require("./routes/VideoRoutes.js");
const aiRoutes = require("./routes/AiRoutes.js");
const scriptRoutes = require("./routes/ScriptRoutes.js");
const authRoutes = require("./routes/authRoutes.js");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true // if you plan to use cookies/auth
}));

// Serve static uploads folder
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Routes
app.use("/api/upload", uploadRoutes);
app.use("/api/video", videoRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/script", scriptRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
