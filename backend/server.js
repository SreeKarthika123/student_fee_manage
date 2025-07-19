// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const authRoutes = require("./routes/authRoutes");
// const studentRoutes = require("./routes/studentRoutes");

// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

// app.use("/api/auth", authRoutes);
// app.use("/api/student", studentRoutes);

// // app.listen(5000, () => console.log("Server running on port 5000"));


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const path = require("path");

// const authRoutes = require("./routes/authRoutes");
// const studentRoutes = require("./routes/studentRoutes");

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

// // API Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/student", studentRoutes);

// // Serve React Frontend in Production
// if (process.env.NODE_ENV === "production") {
//   const frontendPath = path.join(__dirname, "build");
//   app.use(express.static(frontendPath));

//   // app.get("*", (req, res) => {
//   //   res.sendFile(path.resolve(frontendPath, "index.html"));
//   // });
//   app.get("/*", (req, res) => {
//   res.sendFile(path.resolve(frontendPath, "index.html"));
// });

// }

// // PORT
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/student", studentRoutes);

// Serve React Frontend in Production
if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "build");
  app.use(express.static(frontendPath));

  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(frontendPath, "index.html"));
  });
}

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
