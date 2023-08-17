const express = require("express");

const productRoutes = express.Router();

const Product = require("../models/productModel");

// Create product
productRoutes.post("/create", async (req, res) => {
  let newProduct = await Product.create({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    discount_price: req.body.discount_price,
    is_featured: req.body.is_featured,
    tags: req.body.tags,
  });

  res.json({ message: "Product Created", data: newProduct });
});

// Get All Product

// Find all featured product whose price is less than 1000

// Operator -> gt,gte,lt,lte,eq,ne,in, nin
// Logical Operator -> OR, AND, NOR, NOT
productRoutes.get("/all", async (req, res) => {
  let allProducts = await Product.find();
  res.json({
    message: "All product fetched",
    data: allProducts,
  });
});

// Get Single
productRoutes.get("/:id", (req, res) => {});

// Update
productRoutes.put("/:id", (req, res) => {});

// Delete
productRoutes.delete("/:id", (req, res) => {});

module.exports = productRoutes;
