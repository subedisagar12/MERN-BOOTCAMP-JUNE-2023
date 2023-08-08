const express = require("express");
const productRoutes = require("./routes/productRoutes");

const app = express();

const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Server is working !!!",
  });
});

app.use("/product", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
