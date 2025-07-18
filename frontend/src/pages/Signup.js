// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom"; // <-- Import Link

// export default function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPass] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async () => {
//     try {
//       await axios.post("http://localhost:5000/api/auth/signup", {
//         name,
//         email,
//         password,
//       });
//       alert("Signup successful!");
//       navigate("/");
//     } catch (err) {
//       alert("Signup failed: " + (err.response?.data?.message || err.message));
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <input
//         placeholder="Name"
//         onChange={(e) => setName(e.target.value)}
//       />
//       <br />
//       <input
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <br />
//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPass(e.target.value)}
//       />
//       <br />
//       <button onClick={handleSignup}>Signup</button>
//       <p>
//         Already have an account? <Link to="/">Sign in</Link>
//       </p>
//     </div>
//   );
// }import React, { useState, useEffect } from "react";


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";

// export default function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPass] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     createStars();
//     createBalls();
//   }, []);

//   const createStars = () => {
//     const numStars = 100;
//     for (let i = 0; i < numStars; i++) {
//       const star = document.createElement("div");
//       star.className = "star";
//       star.style.top = `${Math.random() * 100}vh`;
//       star.style.left = `${Math.random() * 100}vw`;
//       star.style.animationDuration = `${2 + Math.random() * 3}s`;
//       document.body.appendChild(star);
//     }
//   };

//   const createBalls = () => {
//     const numBalls = 10;
//     for (let i = 0; i < numBalls; i++) {
//       const ball = document.createElement("div");
//       ball.className = "ball";
//       ball.style.top = `${Math.random() * 100}vh`;
//       ball.style.left = `${Math.random() * 100}vw`;
//       ball.style.backgroundColor = `rgba(255, 255, 255, ${Math.random()})`;
//       ball.style.animationDuration = `${4 + Math.random() * 4}s`;
//       document.body.appendChild(ball);
//     }
//   };

//   const handleSignup = async () => {
//     try {
//       await axios.post("http://localhost:5000/api/auth/signup", {
//         name,
//         email,
//         password,
//       });
//       alert("Signup successful!");
//       navigate("/");
//     } catch (err) {
//       alert("Signup failed: " + (err.response?.data?.message || err.message));
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-box">
//         <h2>Signup</h2>
//         <input
//           placeholder="Name"
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br />
//         <input
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />
//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPass(e.target.value)}
//         />
//         <br />
//         <button onClick={handleSignup}>Signup</button>
//         <p>
//           Already have an account? <Link to="/">Sign in</Link>
//         </p>
//       </div>

//       <style>{`
//         body {
//           margin: 0;
//           overflow: hidden;
//           background: black;
//         }

//         .signup-container {
//           height: 100vh;
//           width: 100vw;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           position: relative;
//           z-index: 1;
//         }

//         .signup-box {
//           background: #f2f2f2;
//           padding: 40px;
//           border-radius: 15px;
//           text-align: center;
//           box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
//           z-index: 2;
//           transition: box-shadow 0.3s ease;
//         }

//         .signup-box:hover {
//           box-shadow: 0 0 30px rgba(255, 255, 255, 0.6);
//         }

//         .signup-box input {
//           margin: 10px;
//           padding: 10px;
//           width: 100%;
//           border: 1px solid #ccc;
//           border-radius: 5px;
//         }

//         .signup-box button {
//           padding: 10px 20px;
//           margin-top: 15px;
//           background: black;
//           color: white;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//         }

//         .star {
//           position: absolute;
//           width: 2px;
//           height: 2px;
//           background: white;
//           border-radius: 50%;
//           animation: twinkle ease-in-out infinite alternate;
//         }

//         @keyframes twinkle {
//           0% { opacity: 0.2; transform: scale(0.8); }
//           100% { opacity: 1; transform: scale(1.2); }
//         }

//         .ball {
//           position: absolute;
//           width: 10px;
//           height: 10px;
//           background: white;
//           border-radius: 50%;
//           animation: float 6s linear infinite;
//         }

//         @keyframes float {
//           0% {
//             transform: translateY(0);
//           }
//           100% {
//             transform: translateY(-100vh);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [showBoomer, setShowBoomer] = useState(false);

  const navigate = useNavigate();
useEffect(() => {
  const stars = [];
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${0.5 + Math.random() * 1}s`;

    // star.style.animationDuration = `${1 + Math.random() * 2}s`;
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

  // useEffect(() => {
  //   const stars = [];
  //   for (let i = 0; i < 50; i++) {
  //     const star = document.createElement("div");
  //     star.className = "star";
  //     star.style.top = `${Math.random() * 100}%`;
  //     star.style.left = `${Math.random() * 100}%`;
  //     star.style.animationDuration = `${2 + Math.random() * 3}s`;
  //     document.body.appendChild(star);
  //     stars.push(star);
  //   }

  //   const balls = [];
  //   for (let i = 0; i < 10; i++) {
  //     const ball = document.createElement("div");
  //     ball.className = "ball";
  //     ball.style.top = `${Math.random() * 100}%`;
  //     ball.style.left = `${Math.random() * 100}%`;
  //     ball.style.animationDuration = `${3 + Math.random() * 3}s`;
  //     ball.style.animationDelay = `${Math.random() * 5}s`;
  //     document.body.appendChild(ball);
  //     balls.push(ball);
  //   }

  //   return () => {
  //     stars.forEach((star) => document.body.removeChild(star));
  //     balls.forEach((ball) => document.body.removeChild(ball));
  //   };
  // }, []);

  const handleSignup = async () => {
     if (!name.trim() || !email.trim() || !password.trim()) {
    setModalMessage("❌ Please fill in all fields.");
    setModalVisible(true);
    setTimeout(() => setModalVisible(false), 1000);
    return;
  }
  if (password.length < 6) {
    setModalMessage("❌ Password must be at least 6 characters.");
    setModalVisible(true);
    setTimeout(() => setModalVisible(false), 2500);
    return;
  }
    try {
      await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password,
      });
      setModalMessage("✅ Signup successful!");
      setModalVisible(true);
      setShowBoomer(true);

      setTimeout(() => {
        setModalVisible(false);
        navigate("/signin");
      }, 2000);
    } catch (err) {
      const msg = err.response?.data?.message || "Signup failed. Try again.";
      setModalMessage("❌ " + msg);
      setModalVisible(true);
      setTimeout(() => setModalVisible(false), 2500);
    }
  };

  return (
    <div style={styles.background}>
      <div style={styles.signupBox} className="signup-hover">
        <h2 style={{ marginBottom: "20px", marginTop: "10px" }}>Signup</h2>
        <input
          style={styles.input}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
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
        <button style={styles.button} onClick={handleSignup}>
          Signup
        </button>

        {modalVisible && <div className="modal">{modalMessage}</div>}

        {showBoomer && <div className="boomer-pop">🎉 Woohoo!</div>}

        <p style={{ marginTop: "15px" }}>
          Already have an account? <Link to="/signin">Sign in</Link>
        </p>
      </div>

      {/* Modal */}
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


        @keyframes bounceDiagonal {
          0%   { transform: translate(0, 0); }
          25%  { transform: translate(30px, -50px); }
          50%  { transform: translate(60px, 0); }
          75%  { transform: translate(30px, 50px); }
          100% { transform: translate(0, 0); }
        }

        .signup-hover:hover {
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
          transform: scale(1.02);
          transition: all 0.3s ease;
        }

        .boomer-pop {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(1);
          font-size: 2.5rem;
          color: gold;
          font-weight: bold;
          animation: boomFade 2s ease-out forwards;
          z-index: 9999;
          pointer-events: none;
        }

        @keyframes boomFade {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.7) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.3) rotate(10deg);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1) rotate(-15deg);
          }
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
  signupBox: {
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
