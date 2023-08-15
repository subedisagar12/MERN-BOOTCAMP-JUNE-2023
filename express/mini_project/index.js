const express = require("express");
const mongoose = require("mongoose");

const productRoutes = require("./routes/productRoutes");

const app = express();

const PORT = 8888;

app.use("/product", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
  mongoose
    .connect("mongodb://localhost:27017/mini_project")
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log(err.message);
    });
});
