"use strict";
const express = require("express");

const path = require("path");
const index = "./routes/index";
const bodyParser = require("body-parser");
const morgan = require("morgan");

//initializations
const app = (module.exports = express());
require("./database");

//Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

//routes
app.use("/", require(index));
