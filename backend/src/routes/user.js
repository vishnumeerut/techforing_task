
const express = require("express");
const { createUser } = require("../controllers/user");

const userRouter = express.Router()

userRouter.post("/signup",  createUser)

module.exports = userRouter;