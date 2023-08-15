const express = require("express");

const productRoutes = express.Router();

// Create product
productRoutes.post("/create", (req, res) => {});

// Get All Product
productRoutes.get("/all", (req, res) => {});

// Get Single
productRoutes.get("/:id", (req, res) => {});

// Update
productRoutes.put("/:id", (req, res) => {});

// Delete
productRoutes.delete("/:id", (req, res) => {});

module.exports = productRoutes;
