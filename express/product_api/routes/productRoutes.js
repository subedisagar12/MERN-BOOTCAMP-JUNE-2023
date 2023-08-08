const express = require("express");

const productRoutes = express.Router();

let products = [
  {
    id: 1,
    name: "Apple",
    price: 100,
  },

  {
    id: 2,
    name: "Mango",
    price: 50,
  },

  {
    id: 3,
    name: "Orange",
    price: 70,
  },
];

// Get All product

productRoutes.get("/", (req, res) => {
  res.json({
    message: "All product fetched",
    data: products,
  });
});

// Get Single product
productRoutes.get("/:id", (req, res) => {
  //   console.log(req.params.id);
  let myProduct = products.find((product) => product.id == req.params.id);
  if (myProduct) {
    res.status(200).json({
      message: "Single Product fetched",
      data: myProduct,
    });
  } else {
    res.status(400).json({ message: "Product doesnot exist" });
  }
});

// Create Product

productRoutes.post("/", (req, res) => {
  let newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };

  products.push(newProduct);

  res.json({
    message: "Product Created",
    data: newProduct,
  });
});

// Updating the product

productRoutes.put("/:id", (req, res) => {
  let myProduct = products.find((product) => product.id == req.params.id);

  if (myProduct) {
    // Update task
    // console.log(req.body);

    myProduct.name = req.body.name || myProduct.name;
    myProduct.price = req.body.price || myProduct.price;

    res.json({ message: "Product has been updated" });
  } else {
    res.status(400).json({
      message: "Product doesnot exist",
    });
  }
});

// Deleting the product

productRoutes.delete("/:id", (req, res) => {
  let newProducts = products.filter((product) => product.id != req.params.id);
  products = newProducts;
  res.json({
    message: "Product has been deleted",
  });
});

module.exports = productRoutes;
