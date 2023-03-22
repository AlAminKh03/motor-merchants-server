const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  productId: String,
  price: Number,
  transitionId: String,
  email: String,
});

module.exports = mongoose.model("Payments", PaymentSchema);
