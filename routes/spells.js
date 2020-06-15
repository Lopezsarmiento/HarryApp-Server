const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config(); // Gets values from .env file

// env vars
const apiKey = process.env.API_KEY;
const key = `?key=${apiKey}`;
const base_url = process.env.BASE_URL;

router.get("/", async (req, res) => {
  const endpoint = "spells";
  const url = `${base_url}${endpoint}${key}`;

  try {
    const apiResponse = await axios.get(url);
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

router.get("/:id", async (req, res) => {
  const endpoint = "spells/";
  const id = req.params.id;
  const url = `${base_url}${endpoint}${id}${key}`;

  try {
    const apiResponse = await axios.get(url);
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
