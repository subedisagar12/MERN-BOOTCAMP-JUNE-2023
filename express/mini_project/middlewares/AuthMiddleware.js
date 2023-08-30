const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  try {
    let token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      res.json({ message: "Please provide token" });
    } else {
      let tokenResponse = jwt.verify(token, process.env.JWT_SECRET_KEY);

      console.log(tokenResponse);

      req.user = tokenResponse;
      next();
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = verifyToken;
