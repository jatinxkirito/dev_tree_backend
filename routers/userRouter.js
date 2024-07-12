const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();
userRouter.get("/getUser/:mail", userController.getUserbyEmail);
userRouter.get("/:id", userController.getUserbyUserName);

userRouter.post("", userController.createUser);
userRouter.delete("/:id", userController.deleteUser);
userRouter.patch("/:id", userController.updateUser);
module.exports = userRouter;
