const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/authController");
console.log(authController.googleAuth);
authRouter.get("/google", authController.googleAuth);
authRouter.get("/google/callback", authController.googleCallback);
module.exports = authRouter;
