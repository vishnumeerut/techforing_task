
const express = require("express");
const { createUser, getUserByEmail } = require("../controllers/user");

const userRouter = express.Router()

userRouter.post("/signup",  createUser)
userRouter.post("/signin",  getUserByEmail)

module.exports = userRouter;