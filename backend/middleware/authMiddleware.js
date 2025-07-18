const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: "No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Make sure this secret matches the one used during login
    req.user = await User.findById(decoded.userId);
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token." });
  }
};

module.exports = authMiddleware;
