const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  studentName: { type: String, required: true },
  score: { type: String, required: true },
});

module.exports = mongoose.model("Result", resultSchema);
