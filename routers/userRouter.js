const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();
userRouter.get("/:id", userController.getUser);
userRouter.post("", userController.createUser);
userRouter.delete("/:id", userController.deleteUser);
userRouter.patch("/:id", userController.updateUser);
module.exports = userRouter;
