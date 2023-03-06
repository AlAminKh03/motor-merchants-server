const express = require("express");
const router = express.Router();
const productsController = require("../Controllers/products.controllers");

router.post("/products", productsController.postProducts);
router.post("/products", productsController.getProducts);
module.exports = router;
