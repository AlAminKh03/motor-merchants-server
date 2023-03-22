const express = require("express");
const router = express.Router();
const orderController = require("../Controllers/order.controller");
const { VerifyJwt } = require("../middleware/VerifyJwt");

router.post("/order", VerifyJwt, orderController.postOrder);
router.get("/order", orderController.getOrders);
router.get("/order/:email", VerifyJwt, orderController.getPersonOrder);
router.get("/orders/:id", VerifyJwt, orderController.getSingleOrder);
router.delete("/order/:id", VerifyJwt, orderController.deleteOrder);

module.exports = router;
