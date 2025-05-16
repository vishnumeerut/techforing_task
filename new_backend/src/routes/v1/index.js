const express = require("express");
const pingRouter = require("./ping");
const userRouter = require("../user");
const jobRouter = require("./job");

const v1Router = express.Router()


v1Router.use("/ping", pingRouter)
v1Router.use("/user", userRouter)
v1Router.use("/job", jobRouter)





module.exports = v1Router;