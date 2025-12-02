const express = require("express");
const router = express.Router();
const controllers = require("../controllers/productController.js");

router.get("/", controllers.indexRoute);

module.exports = router;
