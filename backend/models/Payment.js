// const mongoose = require("mongoose");

// const PaymentSchema = new mongoose.Schema({
//   studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   method: String, // e.g., "Credit Card"
//   date: { type: Date, default: Date.now },
//   status: { type: String, default: "Success" },
// });

// module.exports = mongoose.model("Payment", PaymentSchema);


// const mongoose = require("mongoose");

// const PaymentSchema = new mongoose.Schema({
//   studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   method: String,
//   date: { type: Date, default: Date.now },
//   status: { type: String, default: "Success" },
//   paymentId: String, // <== Add this
// });

// module.exports = mongoose.model("Payment", PaymentSchema);


// models/Payment.js
const mongoose = require("mongoose");
const PaymentSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  method: String,
  date: { type: Date, default: Date.now },
  status: { type: String, default: "Success" },
  amount: Number,
  paymentId: String,
});
module.exports = mongoose.model("Payment", PaymentSchema);
