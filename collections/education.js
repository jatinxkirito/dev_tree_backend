const mongoose = require("mongoose");
const educationSchema = new mongoose.Schema({
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
});
