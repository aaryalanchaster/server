const express = require("express");
const router = express.Router();
const Result = require("../../models/result");
const mongoose = require("mongoose");
const result = require("../../models/result");

router.post("/", async (req, res) => {
  try {
    const { courseName, studentName, score } = req.body;
    const result = new Result({ courseName, studentName, score });
    await result.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const results = await Result.find();
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
