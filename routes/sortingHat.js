const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config(); // Gets values from .env file

// env vars
const base_url = process.env.BASE_URL;

router.get("/", async (req, res) => {
  const endpoint = "sortingHat";

  try {
    const apiResponse = await axios.get(`${base_url}${endpoint}`);
    console.log("apiResponse: ", apiResponse.data);
    res.send(apiResponse.data);
  } catch (err) {
    if (err && err.response.status === 401) {
      console.log("something went wrong:  ", err.response.data);
    } else {
      console.log("something went wrong:  ", err.response.data);
    }
  }
});

module.exports = router;
