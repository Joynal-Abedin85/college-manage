

const mongoose = require("mongoose");

const CollegeSchema = new mongoose.Schema({
  collegeImage: String,
  collegeName: String,
  collegeRating: Number,
  admissionDate: String,
  researchCount: Number,
  events: [String], 
  sports: [String],
});

const College = mongoose.model("colleges", CollegeSchema, "colleges");

module.exports = College;
