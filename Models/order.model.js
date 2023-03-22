const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  paid: Boolean,
});
module.exports = new mongoose.model("Orders", OrderSchema);
