const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  education: [
    {
      startDate: {
        type: Number,
        required: [true, "Education must have a start year"],
      },
      endDate: {
        type: Number,
        required: [true, "Education must have a start year"],
      },
      institutionName: {
        type: String,
        required: [true, "Education must have an institution"],
      },
      degreeName: {
        type: String,
        required: [true, "Education must have a degree"],
      },
      grade: { String, required: [true, "Education must have a grade"] },
      location: { String, required: [true, "Education must have a location"] },
    },
  ],
  name: { type: String, required: [true, "You must have a name"] },
  job: { type: String, required: [true, "Please provide your job"] },
  skills: [{ name: String }],
  descriprion: {
    type: String,
    required: [true, "Please provide a brief information about you "],
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
  achievments: [{ achievment: { type: String } }],
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
