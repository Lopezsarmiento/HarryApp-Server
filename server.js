const express = require("express");
const axios = require("axios");
require("dotenv").config(); // Gets values from .env file

//Create a .env file in the root directory of your project. Add environment-specific variables on new lines in the form of NAME=VALUE. For example:

const app = express();
const apiKey = process.env.API_KEY;
const key = `?key=${apiKey}`;
const base_url = process.env.BASE_URL;

console.log("process.env: ", process.env);

app.get("/", (req, res) => {
  res.send("Wello Horld");
});

app.get("/api/sortingHat", async (req, res) => {
  const endpoint = "sortingHat";
  const apiResponse = await axios.get(`${base_url}${endpoint}`);
  console.log("apiResponse: ", apiResponse.data);
  res.send(apiResponse.data);
});

app.get("/api/characters", async (req, res) => {
  const endpoint = "characters";
  const url = `${base_url}${endpoint}${key}`;

  const apiResponse = await axios.get(url);
  console.log("apiResponse: ", apiResponse.data);
  res.send(apiResponse.data);
});

// TODO
// Return by characterId
app.get("/api/characters/:id", async (req, res) => {
  console.log("req.params.id", req.params.id);
  const endpoint = "characters/";
  const id = req.params.id;
  const url = `${base_url}${endpoint}${id}${key}`;

  const apiResponse = await axios.get(url);
  console.log("apiResponse: ", apiResponse.data);
  res.send(apiResponse.data);
});

app.get("/api/houses", async (req, res) => {
  const endpoint = "houses";
  const url = `${base_url}${endpoint}${key}`;

  const apiResponse = await axios.get(url);
  console.log("apiResponse: ", apiResponse.data);
  res.send(apiResponse.data);
});

// TODO
// Return by houseId
app.get("/api/houses/:id", async (req, res) => {
  const endpoint = "houses/";
  const id = req.params.id;
  const url = `${base_url}${endpoint}${id}${key}`;

  const apiResponse = await axios.get(url);
  console.log("apiResponse: ", apiResponse.data);
  res.send(apiResponse.data);
});

app.get("/api/spells", async (req, res) => {
  const endpoint = "spells";
  const url = `${base_url}${endpoint}${key}`;

  const apiResponse = await axios.get(url);
  console.log("apiResponse: ", apiResponse.data);
  res.send(apiResponse.data);
});

// Adding env variable => export PORT=4000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
