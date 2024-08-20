const mongoose = require("mongoose");
const Imag = require("./image");
const projectSchema = new mongoose.Schema({
  image: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Imag",
  },
  name: { type: String, required: [true, "Please provide name"] },
  description: {
    type: String,
    required: [true, "Please provide description of project"],
  },
  githubLink: { type: String },
  hostedLink: { type: String },
});
module.exports = projectSchema;
