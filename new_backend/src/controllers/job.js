// controllers/jobController.js

// const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const Job = require("../models/job");

async function createJob (req, res) {
  try {
    const {
      title,
      company,
      location,
      jobType,
      salary,
      experience,
      description,
      skills,
    } = req.body;

    // Basic validation
    console.log( title,
      company,
      location,
      jobType,
      salary,
      experience,
      description,
      skills,)
    if (
      !title ||
      !company ||
      !location ||
      !jobType ||
      !experience ||
      !description ||
      !skills
    ) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        msg: "Please fill all required fields",
      });
    }

    const newJob = await Job.create({
      title,
      company,
      location,
      jobType,
      salary,
      experience,
      description,
      skills,
    });

    return res.status(StatusCodes.CREATED).json({
      success: true,
      msg: "Job created successfully",
      data: newJob,
    });
  } catch (error) {
    console.error("Error creating job:", error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      msg: "Server error",
      error: error.message,
    });
  }
};

const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 }); // latest jobs first
    res.status(200).json({ success: true, count: jobs.length, jobs });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ success: false, message: "Failed to fetch jobs" });
  }
};

module.exports = {
  createJob,
  getAllJobs,
};
