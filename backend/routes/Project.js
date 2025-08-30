const express = require("express");
const multer = require("multer");
const Project = require("../model/Project");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Create new project (no Redis/BullMQ)
router.post("/", upload.single("file"), async (req, res) => {
  try {
    const { style, level, langOut } = req.body;

    const project = await Project.create({
      title: req.file?.originalname || "Untitled",
      sourceType: "file",
      sourceUri: req.file?.path,
      style,
      level,
      languageIn: "en",
      status: "processing"
    });

    // Process asynchronously (mock AI work)
    setTimeout(async () => {
      console.log("🔄 Processing Project:", project._id);

      // Mock processing delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      project.status = "done";
      await project.save();

      console.log("✅ Project Completed:", project._id);
    }, 0);

    res.json({ success: true, project });
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ error: "Failed to create project" });
  }
});

// Get project status
router.get("/:id/status", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.json({ status: project?.status || "not_found" });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch project status" });
  }
});

module.exports = router;
