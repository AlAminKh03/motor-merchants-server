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
  minOrder: {
    type: Number,
    required: true,
  },
  available: {
    type: Number,
    required: true,
  },
  ImgUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Products", ProductSchema);
