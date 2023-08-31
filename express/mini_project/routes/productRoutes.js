const express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    console.log(file);

    let ext = file.mimetype.split("/").pop();
    cb(null, Date.now().toString() + "." + ext);
  },
});

const upload = multer({ storage: storage });

const productRoutes = express.Router();

const verifyToken = require("../middlewares/AuthMiddleware");
const {
  CreateProduct,
  GetAllProducts,
} = require("../controllers/ProductController");

// Create product
productRoutes.post(
  "/create",
  verifyToken,
  upload.single("image"),
  CreateProduct
);

// Get All Product

// Find all featured product whose price is less than 1000

// Operator -> gt,gte,lt,lte,eq,ne,in, nin
// Logical Operator -> OR, AND, NOR, NOT
productRoutes.get("/all", GetAllProducts);

// Get Single
productRoutes.get("/:id", (req, res) => {});

// Update
productRoutes.put("/:id", verifyToken, (req, res) => {});

// Delete
productRoutes.delete("/:id", verifyToken, (req, res) => {});

module.exports = productRoutes;
