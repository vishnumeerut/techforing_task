const express = require("express");
const { createJob } = require("../../controllers/job");
const { isLogedIn } = require("../../middlewares/auth_middleware");

const jobRouter = express.Router()


jobRouter.post("/", [isLogedIn], createJob)


module.exports = jobRouter;