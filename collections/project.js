const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  image: {
    type: String,
    default:
      "https://wallpapers.com/images/hd/coding-background-9izlympnd0ovmpli.jpg",
  },
  public_id: String,
  name: { type: String, required: [true, "Please provide name"] },
  description: {
    type: String,
    required: [true, "Please provide description of project"],
  },
  githubLink: { type: String },
  hostedLink: { type: String },
});
module.exports = projectSchema;
