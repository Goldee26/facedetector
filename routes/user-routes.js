// import express from "express";
const express = require("express");
// import { Router } from "express";
// import { login, signup } from "../controllers/user-controller.js";
const { login } = require("../controllers/user-controller");
const { signup } = require("../controllers/user-controller");
const userRouter = express.Router();
// userRouter.get("/", getAllUsers); // showing all the data on the website using controller
userRouter.post("/signup", signup);
userRouter.post("/login", login);
// export default userRouter
module.exports = userRouter;
