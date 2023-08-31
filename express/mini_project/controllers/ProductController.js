const Product = require("../models/productModel");
const CreateProduct = async (req, res) => {
  try {
    let newProduct = await Product.create({
      name: req.body.name,
      price: req.body.price,
      image: req.file?.path,
      discount_price: req.body.discount_price,
      is_featured: req.body.is_featured,
      tags: req.body.tags,
      userId: req.user.id,
    });

    res.json({ message: "Product Created", data: newProduct });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const GetAllProducts = async (req, res) => {
  try {
    let allProducts = await Product.find();
    res.json({
      message: "All product fetched",
      data: allProducts,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  CreateProduct,
  GetAllProducts,
};
