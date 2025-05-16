const express = require("express");
const { createJob, getAllJobs } = require("../../controllers/job");
const { isLogedIn } = require("../../middlewares/auth_middleware");

const jobRouter = express.Router()


jobRouter.post("/", [isLogedIn], createJob)
jobRouter.get("/",  getAllJobs)


module.exports = jobRouter;