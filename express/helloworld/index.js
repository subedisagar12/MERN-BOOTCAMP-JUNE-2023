const express = require("express");

const app = express();

const PORT = 8888;

function logger(req, res, next) {
  console.log("I am a middleware. I am executed");

  next();
}

// app.use(logger);

app.get("/about", logger, (req, res) => {
  res.json({
    message: "Hello Client",
  });
});

app.get("/product", logger, (req, res) => {
  res.json({
    message: "All products fetched",
  });
});

app.get("/product/new", (req, res) => {
  res.json({
    message: "New product route called",
  });
});

app.get("/product/:id", (req, res) => {
  res.json({
    message: "Dynamic route called for product " + req.params.id,
  });
});

app.post("/create", (req, res) => {
  res.json({
    message: "POST route has been called",
  });
});

app.listen(PORT, () => {
  console.log("Server has started");
});
