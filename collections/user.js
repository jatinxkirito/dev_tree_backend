const mongoose = require("mongoose");
const validator = require("validator");
const educationSchema = require("./education");
const workSchema = require("./work");
const projectSchema = require("./project");
const userSchema = new mongoose.Schema({
  education: [educationSchema],
  picture: String,
  public_id: String,
  googleId: { type: String, unique: true },
  name: { type: String, required: [true, "You must have a name"] },
  username: {
    type: String,
    required: [true, "You must have a username"],
    unique: [true, "Username already in use"],
    validate: {
      validator: function (str) {
        return validator.isAlphanumeric(str, "en-US", { ignore: "_" });
      },
      message: "Username can only be alphanumeric and underscore",
    },
  },
  email: {
    type: String,
    required: [true, "Please provide a email address"],
    validate: [validator.isEmail, "Please provide a valid email address"],
    unique: [true, "Username already in use"],
  },
  linkedin: { type: String },
  job: { type: String },
  skills: [String],
  description: {
    type: String,
    //required: [true, "Please provide a brief information about you "],
  },
  work: [workSchema],
  achievments: [String],
  github: { type: String },
  projects: [projectSchema],
  leetcode: { type: String },
  codeforces: { type: String },
  codechef: { type: String },
});
userSchema.pre(/^find/, function (next) {
  this.populate({ path: "projects.image" });
  next();
});
userSchema.index({ email: 1 });
userSchema.index({ username: 1 });
module.exports = mongoose.model("User", userSchema);
