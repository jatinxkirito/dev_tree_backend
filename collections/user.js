const mongoose = require("mongoose");
const validator = require("validator");
const { options } = require("../app");
const userSchema = new mongoose.Schema({
  education: [
    {
      startDate: {
        type: Number,
        required: [true, "Education must have a start year"],
      },
      endDate: {
        type: Number,
        required: [true, "Education must have a end year"],
        validate: {
          validator: function (val) {
            return val >= this.startDate;
          },
          message: "Start year must be less than end year",
        },
      },
      institutionName: {
        type: String,
        required: [true, "Education must have an institution"],
      },
      degreeName: {
        type: String,
        required: [true, "Education must have a degree"],
      },
      grade: { type: String, required: [true, "Education must have a grade"] },
      location: {
        type: String,
        required: [true, "Education must have a location"],
      },
    },
  ],
  picture: String,
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
  descriprion: {
    type: String,
    //required: [true, "Please provide a brief information about you "],
  },
  work: [
    {
      company: {
        type: String,
        required: [true, "Please provide company name"],
      },
      jobTitle: {
        type: String,
        required: [true, "Please provide company job title"],
      },
      startDate: {
        type: String,
        required: [true, "Please provide start date"],
      },
      endDate: { type: String, default: "Present" },
      location: { type: String, required: [true, "Please provide location"] },
      skills: { type: String, required: [true, "Please provide skills used"] },
      description: {
        type: String,
        required: [true, "Please provide description"],
      },
    },
  ],
  achievments: [String],
  github: { type: String },
  projects: [
    {
      image: { type: String, required: [true, "Please provide image"] },
      name: { type: String, required: [true, "Please provide name"] },
      description: {
        type: String,
        required: [true, "Please provide description of project"],
      },
      githubLink: { type: String },
      hostedLink: { type: String },
    },
  ],
  leetcode: { type: String },
  codeforces: { type: String },
  codechef: { type: String },
});
userSchema.index({ email: 1 });
module.exports = mongoose.model("User", userSchema);
