const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const RegisterUser = async (req, res) => {
  try {
    let salt = bcrypt.genSaltSync();

    let hashedPassword = bcrypt.hashSync(req.body.password, salt);

    let newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      profile_picture: req.body.profile_picture,
    });

    res.json({
      message: "User Registered successfully",
      data: newUser,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const LoginUser = async (req, res) => {
  try {
    // Finding the user by email sent by client
    let myUser = await User.findOne({ email: req.body.email });

    // If user doesnot exist
    if (!myUser) {
      res.status(400).json({ message: "Email doesnot exist" });
    } else {
      //   Check if the passwords matches
      let passwordMatched = bcrypt.compareSync(
        req.body.password,
        myUser.password
      );
      if (!passwordMatched) {
        res.status(400).json({ message: "Password doesnot match" });
      } else {
        let token = jwt.sign(
          {
            id: myUser._id,
          },
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: "3d",
          }
        );
        res.json({
          message: "Login Successful",
          data: myUser,
          access_token: token,
        });
      }
      //   Return error response if password doesnot match
      // Return Login success if password matches
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  RegisterUser,
  LoginUser,
};
