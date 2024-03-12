const express = require("express");
const router = express.Router();
const Course = require("../models/course");

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const course = new Course({ name });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
