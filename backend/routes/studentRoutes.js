const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

const Payment = require("../models/Payment");

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);
  next();
};

router.get("/me", authMiddleware, async (req, res) => {
  res.json(req.user);
});

router.put("/me", authMiddleware, async (req, res) => {
  const { name, email } = req.body;
  const updated = await User.findByIdAndUpdate(
    req.user._id,
    { name, email },
    { new: true }
  );
  res.json(updated);
});

// router.post("/pay", authMiddleware, async (req, res) => {
//   req.user.feesPaid = true;
//   await req.user.save();
//   res.json(req.user);
// });

router.get("/all", async (req, res) => {
  const users = await User.find({}, "name email feesPaid");
  res.json(users);
});

// routes/studentRoutes.js
const { v4: uuidv4 } = require("uuid");
// const Payment = require("../models/Payment");

// router.post("/pay", authMiddleware, async (req, res) => {
//   const user = req.user;

//   if (user.feesPaid) {
//     return res.status(400).json({ message: "Fees already paid." });
//   }

//   const method = req.body.method || "Credit Card";
//   user.feesPaid = true;
//   await user.save();

//   const payment = await Payment.create({
//     studentId: user._id,
//     method,
//     status: "Success",
//     paymentId: uuidv4(),
//   });

//   // Simulate email:
//   console.log(`📧 Mock email sent to ${user.email} with receipt ${payment.paymentId}`);

//   res.json({ user, payment, studentName: user.name });
// });
// import { v4 as uuidv4 } from 'uuid';
// // or require('uuid') if using CommonJS
// paymentId: uuidv4(),


// router.post("/pay", authMiddleware, async (req, res) => {
//   const { method, amount } = req.body;

//   if (req.user.feesPaid) {
//     return res.status(400).json({ message: "Fees already paid." });
//   }

//   req.user.feesPaid = true;
//   await req.user.save();

//   const payment = await Payment.create({
//     studentId: req.user._id,
//     method,
//     amount,
//     status: "Success",
//     paymentId: Math.random().toString(36).substring(2, 10),
//     date:new Date(),
//   });

//   res.json({ ...payment.toObject(), user: req.user });
// });

// import { v4 as uuidv4 } from 'uuid';

router.post("/pay", authMiddleware, async (req, res) => {
  const { method, amount } = req.body;

  if (req.user.feesPaid) {
    return res.status(400).json({ message: "Fees already paid." });
  }

  req.user.feesPaid = true;
  await req.user.save();

  const payment = await Payment.create({
    studentId: req.user._id,
    method,
    amount,
    status: "Success",
    paymentId: uuidv4(),
    date: new Date(),
  });

  res.json({ ...payment.toObject(), user: req.user });
});



// const { v4: uuidv4 } = require("uuid"); // npm install uuid
// // const Payment = require("../models/Payment");

// router.post("/pay", authMiddleware, async (req, res) => {
//   const user = req.user;

//   if (user.feesPaid) {
//     return res.status(400).json({ message: "Fees already paid." });
//   }

//   const method = req.body.method || "Credit Card";

//   user.feesPaid = true;
//   await user.save();

//   const payment = await Payment.create({
//     studentId: user._id,
//     method,
//     status: "Success",
//     paymentId: uuidv4(),
//   });

//   res.json({ user, payment });
// });

// router.post("/pay", authMiddleware, async (req, res) => {
//   const user = req.user;

//   // Only allow payment if not already paid
//   if (user.feesPaid) {
//     return res.status(400).json({ message: "Fees already paid." });
//   }

//   user.feesPaid = true;
//   await user.save();

//   // Save payment history
//   await Payment.create({
//     studentId: user._id,
//     method: "Credit Card", // mock method
//     status: "Success",
//   });

//   res.json(user);
// });

router.get("/payments", authMiddleware, async (req, res) => {
  const payments = await Payment.find({ studentId: req.user._id }).sort({ date: -1 });
   res.status(200).json(payments);
  // res.json(payments);
});


module.exports = router;
