const express = require("express");
const app = express();
app.use(express.json());
app.get("/", async (req, res) => {
  return res.status(200).json({ status: "OK" });
});
module.exports = app;
