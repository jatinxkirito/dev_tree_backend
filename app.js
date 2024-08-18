require("express-async-errors");
const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/userRouter");
const AppError = require("./utils/appError");
const ErrorController = require(`./controllers/errorController`);
const authRouter = require("./routers/authRouter");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
//app.options("*", cors());

app.use("/api", userRouter);
app.use("/auth", authRouter);
app.all(`*`, (req, res, next) => {
  const error = new AppError(
    `Can't find address ${req.originalUrl} on this server`,
    404
  );

  next(error);
});
app.use(ErrorController);
module.exports = app;
