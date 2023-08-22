const express = require("express");
const jwt = require("jsonwebtoken");

const productRoutes = express.Router();

const Product = require("../models/productModel");

// Create product
productRoutes.post("/create", async (req, res) => {
  try {
    let token = req.headers.authorization.split(" ")[1];

    let tokenResponse = jwt.verify(
      token,
      "kjdfhgkjdhfgd@fkjgklfjg&fdgnjdfhgdfjg#fgng$"
    );

    console.log(tokenResponse);

    let newProduct = await Product.create({
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
      discount_price: req.body.discount_price,
      is_featured: req.body.is_featured,
      tags: req.body.tags,
    });

    res.json({ message: "Product Created", data: newProduct });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// Get All Product

// Find all featured product whose price is less than 1000

// Operator -> gt,gte,lt,lte,eq,ne,in, nin
// Logical Operator -> OR, AND, NOR, NOT
productRoutes.get("/all", async (req, res) => {
  try {
    let token = req.headers.authorization?.split(" ")[1];

    let tokenResponse = jwt.verify(
      token,
      "kjdfhgkjdhfgd@fkjgklfjg&fdgnjdfhgdfjg#fgng$"
    );
    let allProducts = await Product.find();
    res.json({
      message: "All product fetched",
      data: allProducts,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// Get Single
productRoutes.get("/:id", (req, res) => {});

// Update
productRoutes.put("/:id", (req, res) => {});

// Delete
productRoutes.delete("/:id", (req, res) => {});

module.exports = productRoutes;
