const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  name: String,
  imageURL: String,
  price: Number,
  description: String,
  rating: Number,
});

module.exports = Product;
