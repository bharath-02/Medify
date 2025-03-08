const express = require("express");
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", (req, res) => {
  const dbState = mongoose.connection.readyState;

  res.status(200).json({
    status: "ok",
    message: "Medify backend is running successfully!",
    dbStatus: dbState === 1 ? "Connected" : "Disconnected",
    timestamp: new Date().toISOString(),
  });
});

// app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
