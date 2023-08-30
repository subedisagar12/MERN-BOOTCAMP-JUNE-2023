const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    discount_price: {
      type: Number,
    },
    is_featured: {
      type: Boolean,
      default: false,
    },
    tags: {
      type: [String],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      as: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
