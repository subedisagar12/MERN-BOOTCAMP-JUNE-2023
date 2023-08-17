const express = require("express");
const User = require("../models/userModel");

const userRoutes = express.Router();

userRoutes.post("/register", async (req, res) => {
  try {
    let newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      profile_picture: req.body.profile_picture,
    });

    res.json({
      message: "User Registered successfully",
      data: newUser,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

userRoutes.post("/login", async (req, res) => {
  try {
    // Finding the user by email sent by client
    let myUser = await User.findOne({ email: req.body.email });

    // If user doesnot exist
    if (!myUser) {
      res.status(400).json({ message: "Email doesnot exist" });
    } else {
      //   Check if the passwords matches
      //   Return error response if password doesnot match
      // Return Login success if password matches
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = userRoutes;
