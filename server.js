const express = require("express");
require("dotenv").config(); // Gets values from .env file
const characters = require("./routes/characters");
const houses = require("./routes/houses");
const sortingHat = require("./routes/sortingHat");
const spells = require("./routes/spells");
//Create a .env file in the root directory of your project. Add environment-specific variables on new lines in the form of NAME=VALUE. For example:

const app = express();
app.use(express.json());

//Routes
app.use("/api/characters", characters);
app.use("/api/houses", houses);
app.use("/api/sortingHat", sortingHat);
app.use("/api/spells", spells);

// Adding env variable => export PORT=4000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
