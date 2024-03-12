// server/server.js
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
require('dotenv').config();

app.use(express.json());
app.use(cors());
// Routes
const studentRoutes = require("./routes/studentroutes");
const courseRoutes = require("./routes/courseroutes");
const resultRoutes = require("./routes/resultroutes")

app.use("/api/students", studentRoutes);
app.use("/api/courses", courseRoutes)
app.use("/api/results",resultRoutes)
// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error("Error connecting to MongoDB:", error));
