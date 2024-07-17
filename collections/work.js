const mongoose = require("mongoose");
const workSchema = new mongoose.Schema({
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
});
module.exports = workSchema;
