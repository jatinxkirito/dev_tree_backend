const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();
userRouter.patch("/userDp", userController.updateUserimage);
userRouter.get("/getUser/:mail", userController.getUserbyEmail);
userRouter.post("", userController.createUser);
userRouter.get("/:id", userController.getUserbyUserName);
userRouter.get("/:id/education", userController.getUserEducation);
userRouter.get("/:id/base", userController.getUserHome);
userRouter.get("/:id/cp", userController.getUserCp);
userRouter.get("/:id/image", userController.getUserImage);
userRouter.get("/:id/work", userController.getUserWork);
userRouter.get("/:id/achievments", userController.getUserAchievments);
userRouter.get("/:id/skills", userController.getUserSkills);
userRouter.get("/:id/experience", userController.getUserExperience);
userRouter.delete("/:id", userController.deleteUser);
userRouter.patch("/:id", userController.updateUser);

module.exports = userRouter;
