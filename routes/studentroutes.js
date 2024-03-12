// server/routes/studentRoutes.js
const express = require("express");
const router = express.Router();
const Student = require("../../models/student");

router.post("/", async (req, res) => {
  try {
    const { firstName, familyName, dob } = req.body;
    const student = new Student({ firstName, familyName, dob });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
