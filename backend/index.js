const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const projectRoutes = require("./routes/Project");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)

.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Error:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

