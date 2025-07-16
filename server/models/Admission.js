const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema({
  collegeName: String,
  candidateName: String,
  subject: String,
  email: String,
  phone: String,
  address: String,
  dateOfBirth: String,
  image: String,
}, { timestamps: true });

const Admission = mongoose.model("Admission", admissionSchema);

module.exports = Admission;
