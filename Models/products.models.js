const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  MinOrder: {
    type: Number,
    required: true,
  },
  available: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Products", ProductSchema);
