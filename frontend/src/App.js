// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Profile from "./pages/Profile";
// import AllStudents from "./pages/AllStudents";
// import PayFees from "./pages/PayFees";
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/students" element={<AllStudents />} />
//         <Route path="/pay" element={<PayFees />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Profile from "./pages/Profile";
// import AllStudents from "./pages/AllStudents";
// import PayFees from "./pages/PayFees";
// import Navbar from "./components/Navbar";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Dashboard from "./pages/Dashboard";
// import Receipt from "./pages/Receipt";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route
//   path="/dashboard"
//   element={
//     <ProtectedRoute>
//       <Dashboard />
//     </ProtectedRoute>
//   }
//   />
 
//         <Route
//           path="/profile"
//           element={
//             <ProtectedRoute>
//               <Profile />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/students"
//           element={
//             <ProtectedRoute>
//               <AllStudents />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/pay"
//           element={
//             <ProtectedRoute>
//               <PayFees />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//        <Route path="/receipt" element={<Receipt />} />
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import AllStudents from "./pages/AllStudents";
import PayFees from "./pages/PayFees";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Receipt from "./pages/Receipt";

function App() {
  return (
    <Router>
      <Navbar />

      {/* ✅ ToastContainer placed here so it's available on all routes */}
      <ToastContainer position="top-center" autoClose={3000} />

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/students"
          element={
            <ProtectedRoute>
              <AllStudents />
            </ProtectedRoute>
          }
        />

        <Route
          path="/pay"
          element={
            <ProtectedRoute>
              <PayFees />
            </ProtectedRoute>
          }
        />

        <Route
          path="/receipt"
          element={<Receipt />}
        />
      </Routes>
    </Router>
  );
}

export default App;
