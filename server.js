const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", (req, res) => {
  res.send("Wello Horld");
});

app.get("/api/sortingHat", async (req, res) => {
  const base_url = "https://www.potterapi.com/v1/";
  const endpoint = "sortingHat";
  const apiResponse = await axios.get(`${base_url}${endpoint}`);
  console.log("apiResponse: ", apiResponse.data);
  res.send(apiResponse.data);
});

app.get("/api/characters", async (req, res) => {
  const base_url = "https://www.potterapi.com/v1/";
  const endpoint = "characters";
  const key =
    "?key=$2a$10$UXikGabnOjFHDfhyygNUKO/npiXWroU3qlsUiDs2Rn2ZMkFJ3b9n.";
  const url = `${base_url}${endpoint}${key}`;

  const apiResponse = await axios.get(url);
  console.log("apiResponse: ", apiResponse.data);
  res.send(apiResponse.data);
});

// TODO
// Return by characterId
app.get("/api/characters/:id", async (req, res) => {
  console.log("req.params.id", req.params.id);
  const base_url = "https://www.potterapi.com/v1/";
  const endpoint = "characters/";
  const id = req.params.id;
  const key =
    "?key=$2a$10$UXikGabnOjFHDfhyygNUKO/npiXWroU3qlsUiDs2Rn2ZMkFJ3b9n.";
  const url = `${base_url}${endpoint}${id}${key}`;

  const apiResponse = await axios.get(url);
  console.log("apiResponse: ", apiResponse.data);
  res.send(apiResponse.data);
});

app.get("/api/houses", async (req, res) => {
  const base_url = "https://www.potterapi.com/v1/";
  const endpoint = "houses";
  const key =
    "?key=$2a$10$UXikGabnOjFHDfhyygNUKO/npiXWroU3qlsUiDs2Rn2ZMkFJ3b9n.";
  const url = `${base_url}${endpoint}${key}`;

  const apiResponse = await axios.get(url);
  console.log("apiResponse: ", apiResponse.data);
  res.send(apiResponse.data);
});

// TODO
// Return by houseId
app.get("/api/houses/:id", async (req, res) => {
  console.log("req.params.id", req.params.id);
  const base_url = "https://www.potterapi.com/v1/";
  const endpoint = "houses/";
  const id = req.params.id;
  const key =
    "?key=$2a$10$UXikGabnOjFHDfhyygNUKO/npiXWroU3qlsUiDs2Rn2ZMkFJ3b9n.";
  const url = `${base_url}${endpoint}${id}${key}`;

  const apiResponse = await axios.get(url);
  console.log("apiResponse: ", apiResponse.data);
  res.send(apiResponse.data);
});

app.get("/api/spells", async (req, res) => {
  const base_url = "https://www.potterapi.com/v1/";
  const endpoint = "spells";
  const key =
    "?key=$2a$10$UXikGabnOjFHDfhyygNUKO/npiXWroU3qlsUiDs2Rn2ZMkFJ3b9n.";
  const url = `${base_url}${endpoint}${key}`;

  const apiResponse = await axios.get(url);
  console.log("apiResponse: ", apiResponse.data);
  res.send(apiResponse.data);
});

// Adding env variable => export PORT=4000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
