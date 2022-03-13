const express = require("express");
const bodyParser = require("body-parser");
const app = express();

require("dotenv").config();
app.use(bodyParser.json());

const dataRoute = require("./routes");

app.use("/", dataRoute);

module.exports = app;