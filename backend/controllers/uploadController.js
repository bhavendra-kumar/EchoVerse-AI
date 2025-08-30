import fs from "fs";

export const uploadFile = (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  // You can add PDF/text extraction here
  return res.json({
    message: "File uploaded successfully",
    filePath: `/uploads/${req.file.filename}`,
  });
};
