const { Queue, Worker } = require("bullmq");
const Project = require("./model/Project");

const connection = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
};

const pipelineQueue = new Queue("pipeline", { connection });

// Worker
new Worker("pipeline", async job => {
  const { projectId, style, level, langOut } = job.data;
  const project = await Project.findById(projectId);

  console.log("🔄 Processing Project:", projectId);

  // TODO: Replace with AI steps
  await new Promise(resolve => setTimeout(resolve, 2000)); // mock

  project.status = "done";
  await project.save();

  console.log("✅ Project Completed:", projectId);
  return { success: true };
}, { connection });

module.exports = { pipelineQueue };
