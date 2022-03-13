const express = require("express");
const { router } = require("../app");
const { filterData, showDetails, redirectUrl } = require("../controllers");

const routes = express.Router();

routes.post("/filter-data", filterData);
routes.get("/", showDetails);
routes.get("*", redirectUrl);

module.exports = routes;
