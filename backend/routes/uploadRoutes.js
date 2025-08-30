const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// ensure uploads folder exists
const UPLOADS = path.join(process.cwd(),'uploads');
if (!fs.existsSync(UPLOADS)) fs.mkdirSync(UPLOADS, { recursive: true });

const storage = multer.diskStorage({
  destination: (req,file,cb)=> cb(null, UPLOADS),
  filename: (req,file,cb)=> cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

router.post('/', upload.single('file'), async (req,res)=>{
  const filePath = req.file.path;
  const ext = path.extname(filePath).toLowerCase();
  let text = '';

  if (ext === '.pdf') {
    const data = await pdfParse(fs.readFileSync(filePath));
    text = data.text;
  } else if (ext === '.docx') {
    const mammoth = require('mammoth');
    const result = await mammoth.extractRawText({ path: filePath });
    text = result.value;
  } else {
    // fallback for .txt
    text = fs.readFileSync(filePath, 'utf8');
  }

  res.json({ ok:true, file: `/uploads/${path.basename(filePath)}`, text });
});

module.exports = router;
