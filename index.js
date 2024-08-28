const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DATABASE_LINK, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => console.error(err));
const app = require("./app.js");
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("We are live");
});
