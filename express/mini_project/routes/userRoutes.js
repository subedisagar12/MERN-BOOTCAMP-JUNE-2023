const express = require("express");
const { RegisterUser, LoginUser } = require("../controllers/UserController");

const userRoutes = express.Router();

userRoutes.post("/register", RegisterUser);

userRoutes.post("/login", LoginUser);

module.exports = userRoutes;
