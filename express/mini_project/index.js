const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

const PORT = 8888;

dotenv.config();

app.use(cors());
app.use(express.json());
// app.use(verifyToken);

app.use("/product", productRoutes);
app.use("/user", userRoutes);

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
