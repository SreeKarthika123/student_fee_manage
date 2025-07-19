// import { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom"; // <-- Import Link

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPass] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//       });
//       localStorage.setItem("token", res.data.token);
//       navigate("/dashboard");
//     } catch (err) {
//       alert("Login failed: " + (err.response?.data?.message || err.message));
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
// //         placeholder="Email"
// //         onChange={(e) => setEmail(e.target.value)}
// //       /><br />
// //       <input
// //         type="password"
// //         placeholder="Password"
// //         onChange={(e) => setPass(e.target.value)}
// //       /><br />
// //       <button onClick={handleLogin}>Login</button>
// //       <p>
// //         Don’t have an account? <Link to="/signup">Sign up</Link>
// //       </p>
// //     </div>
// //   );
// // }




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPass] = useState("");
//   const [modalMessage, setModalMessage] = useState("");
//   const [modalVisible, setModalVisible] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const stars = [];
//     for (let i = 0; i < 50; i++) {
//       const star = document.createElement("div");
//       star.className = "star";
//       star.style.top = `${Math.random() * 100}%`;
//       star.style.left = `${Math.random() * 100}%`;
//       star.style.animationDuration = `${2 + Math.random() * 3}s`;
//       document.body.appendChild(star);
//       stars.push(star);
//     }

//     const balls = [];
//     for (let i = 0; i < 10; i++) {
//       const ball = document.createElement("div");
//       ball.className = "ball";
//       ball.style.top = `${Math.random() * 100}%`;
//       ball.style.left = `${Math.random() * 100}%`;
//       ball.style.animationDuration = `${3 + Math.random() * 3}s`;
//       ball.style.animationDelay = `${Math.random() * 5}s`;
//       document.body.appendChild(ball);
//       balls.push(ball);
//     }

//     return () => {
//       stars.forEach((star) => document.body.removeChild(star));
//       balls.forEach((ball) => document.body.removeChild(ball));
//     };
//   }, []);

//   const handleLogin = async () => {
//      if (!email.trim() || !password.trim()) {
//     setModalMessage("❌ Please fill in both email and password.");
//     setModalVisible(true);
//     setTimeout(() => setModalVisible(false), 1000);
//     return; // 🚫 Prevent API call
//   }

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//       });
//       localStorage.setItem("token", res.data.token);
//       setModalMessage("✅ Login successful!");
//       setModalVisible(true);
//       setTimeout(() => {
//         setModalVisible(false);
//         navigate("/dashboard");
//       }, 1500);
//     } catch (err) {
//       const msg = err.response?.data?.message || "Login failed. Try again.";
//       setModalMessage("❌ " + msg);
//       setModalVisible(true);
//       setTimeout(() => setModalVisible(false), 2500);
//     }
//   };

//   return (
//     <div style={styles.background}>
//       <div style={styles.loginBox} className="login-hover">
//         <h2 style={{ marginBottom: "20px", marginTop: "10px" }}>Login</h2>
//         <input
//           style={styles.input}
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           style={styles.input}
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPass(e.target.value)}
//         />
//         <button style={styles.button} onClick={handleLogin}>
//           Login
//         </button>

//         <p style={{ marginTop: "15px" }}>
//           Don’t have an account? <Link to="/">Sign up</Link>
//         </p>
//       </div>

//       {/* Modal */}
//       {modalVisible && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.modalBox}>
//             <p>{modalMessage}</p>
//           </div>
//         </div>
//       )}

//       <style>{`
//         body {
//           margin: 0;
//           overflow: hidden;
//         }

//         .star {
//           position: fixed;
//           width: 2px;
//           height: 2px;
//           background: white;
//           border-radius: 50%;
//           animation: twinkle infinite alternate;
//         }

//         @keyframes twinkle {
//           from { opacity: 0.2; transform: scale(0.8); }
//           to { opacity: 1; transform: scale(1.2); }
//         }

//         .ball {
//           position: fixed;
//           width: 15px;
//           height: 15px;
//           background: rgba(255, 255, 255, 0.15);
//           border-radius: 50%;
//           animation: bounceDiagonal 3s ease-in-out infinite;
//         }

//         @keyframes bounceDiagonal {
//           0%   { transform: translate(0, 0); }
//           25%  { transform: translate(30px, -50px); }
//           50%  { transform: translate(60px, 0); }
//           75%  { transform: translate(30px, 50px); }
//           100% { transform: translate(0, 0); }
//         }

//         .login-hover:hover {
//           box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
//           transform: scale(1.02);
//           transition: all 0.3s ease;
//         }
//       `}</style>
//     </div>
//   );
// }

// const styles = {
//   background: {
//     height: "100vh",
//     backgroundColor: "#000",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   loginBox: {
//     backgroundColor: "#f8f9fa",
//     padding: "40px 30px",
//     borderRadius: "12px",
//     width: "400px",
//     boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
//     textAlign: "center",
//   },
//   input: {
//     width: "100%",
//     padding: "12px 14px",
//     margin: "10px 0",
//     backgroundColor: "#fff",
//     border: "1px solid #ccc",
//     borderRadius: "8px",
//     fontSize: "14px",
//     boxSizing: "border-box",
//   },
//   button: {
//     padding: "10px 20px",
//     backgroundColor: "#000",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     fontSize: "16px",
//     cursor: "pointer",
//   },
//   modalOverlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(0,0,0,0.5)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     zIndex: 9999,
//   },
//   modalBox: {
//     backgroundColor: "#fff",
//     padding: "20px 30px",
//     borderRadius: "10px",
//     fontSize: "16px",
//     fontWeight: "bold",
//     textAlign: "center",
//     boxShadow: "0 0 15px rgba(0,0,0,0.2)",
//   },
// };



import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const stars = [];
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${0.5 + Math.random() * 1}s`;
      document.body.appendChild(star);
      stars.push(star);
    }

    const balls = [];
    for (let i = 0; i < 20; i++) {
      const ball = document.createElement("div");
      const size = 10 + Math.random() * 10;
      ball.className = "ball";
      ball.style.width = `${size}px`;
      ball.style.height = `${size}px`;
      ball.style.top = `${Math.random() * 100}%`;
      ball.style.left = `${Math.random() * 100}%`;
      ball.style.animationDuration = `${2 + Math.random() * 2}s`;
      ball.style.animationDelay = `${Math.random() * 2}s`;
      ball.style.animationDirection = Math.random() > 0.5 ? "normal" : "reverse";
      document.body.appendChild(ball);
      balls.push(ball);
    }

    return () => {
      stars.forEach((star) => document.body.removeChild(star));
      balls.forEach((ball) => document.body.removeChild(ball));
    };
  }, []);

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      setModalMessage("❌ Please fill in both email and password.");
      setModalVisible(true);
      setTimeout(() => setModalVisible(false), 1000);
      return;
    }
    const API_URL = process.env.REACT_APP_API_URL || "";

try {
  const res = await axios.post(`${API_URL}/api/auth/login`, {
    email,
    password,
  });
  localStorage.setItem("token", res.data.token);
  setModalMessage("✅ Login successful!");
  setModalVisible(true);
  setTimeout(() => {
    setModalVisible(false);
    navigate("/dashboard");
  }, 1500);
} catch (err) {
  const msg = err.response?.data?.message || "Login failed. Try again.";
  setModalMessage("❌ " + msg);
  setModalVisible(true);
  setTimeout(() => setModalVisible(false), 2500);
}


    // try {
    //   const res = await axios.post("http://localhost:5000/api/auth/login", {
    //     email,
    //     password,
    //   });
    //   localStorage.setItem("token", res.data.token);
    //   setModalMessage("✅ Login successful!");
    //   setModalVisible(true);
    //   setTimeout(() => {
    //     setModalVisible(false);
    //     navigate("/dashboard");
    //   }, 1500);
    // } catch (err) {
    //   const msg = err.response?.data?.message || "Login failed. Try again.";
    //   setModalMessage("❌ " + msg);
    //   setModalVisible(true);
    //   setTimeout(() => setModalVisible(false), 2500);
    // }
  };

  return (
    <div style={styles.background}>
      <div style={styles.loginBox} className="login-hover">
        <h2 style={{ marginBottom: "20px", marginTop: "10px" }}>Login</h2>
        <input
          style={styles.input}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />
        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>

        <p style={{ marginTop: "15px" }}>
          Don’t have an account? <Link to="/">Sign up</Link>
        </p>
      </div>

      {modalVisible && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalBox}>
            <p>{modalMessage}</p>
          </div>
        </div>
      )}

      <style>{`
        body {
          margin: 0;
          overflow: hidden;
        }

        .star {
          position: fixed;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle infinite alternate ease-in-out;
          z-index: 0;
        }

        @keyframes twinkle {
          0%   { opacity: 0.2; transform: scale(0.6) rotate(0deg); }
          50%  { opacity: 1; transform: scale(1.5) rotate(45deg); }
          100% { opacity: 0.2; transform: scale(0.6) rotate(0deg); }
        }

        .ball {
          position: fixed;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          animation: bounceCrazy ease-in-out infinite;
          z-index: 0;
        }

        @keyframes bounceCrazy {
          0%   { transform: translate(0, 0); }
          25%  { transform: translate(50px, -80px); }
          50%  { transform: translate(100px, 0); }
          75%  { transform: translate(50px, 80px); }
          100% { transform: translate(0, 0); }
        }

        .login-hover:hover {
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
          transform: scale(1.02);
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}

const styles = {
  background: {
    height: "100vh",
    backgroundColor: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginBox: {
    backgroundColor: "#f8f9fa",
    padding: "40px 30px",
    borderRadius: "12px",
    width: "400px",
    boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    margin: "10px 0",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  },
  modalBox: {
    backgroundColor: "#fff",
    padding: "20px 30px",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
  },
};
