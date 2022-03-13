const express = require("express");
const { filterData, showDetails } = require("../controllers");

const routes = express.Router();

routes.post("/filter-data", filterData);
routes.get("/", showDetails);

module.exports = routes;
