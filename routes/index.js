const express = require("express");
const { filterData } = require("../controllers");

const routes = express.Router();

routes.post("/filter-data", filterData);

module.exports = routes;
