const express = require("express");

const app = express();

const PORT = 5000;

const products = [
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

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Server is working !!!",
  });
});

// Get All product

app.get("/product", (req, res) => {
  res.json({
    message: "All product fetched",
    data: products,
  });
});

// Get Single product
app.get("/product/:id", (req, res) => {
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

app.post("/product", (req, res) => {
  console.log(req.body);

  res.json({
    message: "Product Created",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
