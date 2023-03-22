const express = require("express");
const router = express.Router();
const productsController = require("../Controllers/products.controllers");
const { VerifyJwt } = require("../middleware/VerifyJwt");

router.post("/products", VerifyJwt, productsController.postProducts);
router.get("/products", productsController.getProducts);
router.get("/products/:id", productsController.getSingleProduct);
module.exports = router;
