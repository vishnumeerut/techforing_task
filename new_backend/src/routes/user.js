
const express = require("express");
const { createUser, getUserByEmail, logoutUser } = require("../controllers/user");

const userRouter = express.Router()

userRouter.post("/signup",  createUser)
userRouter.post("/signin",  getUserByEmail)
userRouter.post("/logout",  logoutUser)

module.exports = userRouter;