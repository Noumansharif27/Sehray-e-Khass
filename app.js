require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const ejsMate = require("ejs-mate");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.engine("ejs", ejsMate);

// Routes
const listingRoute = require("./routes/index.js");

const PORT = process.env.APP_PORT || 8080;

app.use("/", listingRoute);

app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
