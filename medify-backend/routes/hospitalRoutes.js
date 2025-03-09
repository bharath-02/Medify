const axios = require("axios");
const express = require("express");

const router = express.Router();

router.get("/states", async (req, res) => {
  try {
    const response = await axios.get(`${process.env.MEDIFY_URI}/states`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching states:", error.message);
    res.status(500).json({ message: "Failed to fetch states" });
  }
});

router.get("/cities/:state", async (req, res) => {
  const { state } = req.params;
  try {
    const response = await axios.get(
      `${process.env.MEDIFY_URI}/cities/${state}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching cities:", error.message);
    res.status(500).json({ message: "Failed to fetch cities" });
  }
});

router.get("/data", async (req, res) => {
  const { state, city } = req.query;
  try {
    const response = await axios.get(
      `${process.env.MEDIFY_URI}/data?state=${state}&city=${city}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching hospital data:", error.message);
    res.status(500).json({ message: "Failed to fetch hospital data" });
  }
});

module.exports = router;
