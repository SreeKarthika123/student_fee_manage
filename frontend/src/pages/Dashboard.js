// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Dashboard() {
//   const [user, setUser] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch logged-in user details
//     axios
//       .get("http://localhost:5000/api/student/me", {
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//       })
//       .then((res) => setUser(res.data))
//       .catch(() => {
// //         alert("Session expired. Please login again.");
// //         localStorage.removeItem("token");
// //         navigate("/");
// //       });
// //   }, []);

// //   return (
// //     <div>
// //       <h2>Welcome, {user.name} 👋</h2>
// //       <p>Email: {user.email}</p>
// //       <button onClick={() => navigate("/profile")}>Go to Profile</button>
// //       <button onClick={() => navigate("/students")}>View All Students</button>
// //     </div>
// //   );
// // }



// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Dashboard() {
//   const [user, setUser] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/student/me", {
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//       })
//       .then((res) => setUser(res.data))
//       .catch(() => {
//         alert("Session expired. Please login again.");
//         localStorage.removeItem("token");
//         navigate("/");
//       });
//   }, [navigate]);

//   return (
//     <div style={styles.wrapper}>
//       <div style={styles.box}>
//         <h2 style={styles.heading}>Welcome, {user.name} 👋</h2>
//         <p style={styles.text}><strong>Email:</strong> {user.email}</p>
//         <div style={styles.btnGroup}>
//           <button style={styles.button} onClick={() => navigate("/profile")}>Go to Profile</button>
//           <button style={styles.button} onClick={() => navigate("/students")}>View All Students</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   wrapper: {
//     minHeight: "100vh",
//     background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     fontFamily: "'Poppins', sans-serif",
//   },
//   box: {
//     background: "#fff",
//     padding: "40px",
//     borderRadius: "16px",
//     boxShadow: "0 0 15px rgba(0,0,0,0.2)",
//     width: "400px",
//     maxWidth: "90%",
//     textAlign: "center",
//   },
//   heading: {
//     fontSize: "24px",
//     marginBottom: "16px",
//     color: "#333",
//   },
//   text: {
//     fontSize: "16px",
//     marginBottom: "24px",
//     color: "#555",
//   },
//   btnGroup: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "12px",
//   },
//   button: {
//     padding: "12px",
//     backgroundColor: "#4CAF50",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     fontSize: "16px",
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//   },
// };




// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Dashboard() {
//   const [user, setUser] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/student/me", {
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//       })
//       .then((res) => setUser(res.data))
//       .catch(() => {
//         alert("Session expired. Please login again.");
//         localStorage.removeItem("token");
//         navigate("/");
//       });
//   }, [navigate]);

//   return (
//     <div style={styles.pageWrapper}>
//       <div style={styles.stars}></div>
//       <div style={styles.stars2}></div>
//       <div style={styles.stars3}></div>

//       <div style={styles.card}>
//         <h2 style={styles.title}>Welcome, {user.name} ✨</h2>
//         <p style={styles.info}><strong>Email:</strong> {user.email}</p>
//         <div style={styles.actions}>
//           <button style={styles.button} onClick={() => navigate("/profile")}>
//             Go to Profile
//           </button>
//           <button style={styles.button} onClick={() => navigate("/students")}>
//             View All Students
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   pageWrapper: {
//     position: "relative",
//     minHeight: "100vh",
//     background: "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
//     overflow: "hidden",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     fontFamily: "'Poppins', sans-serif",
//   },
//   stars: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     background:
//       "url('https://raw.githubusercontent.com/karthik947/stars-bg/main/stars.png') repeat",
//     animation: "moveStars 100s linear infinite",
//     zIndex: 0,
//   },
//   stars2: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     background:
//       "url('https://raw.githubusercontent.com/karthik947/stars-bg/main/stars2.png') repeat",
//     animation: "moveStars 200s linear infinite",
//     zIndex: 0,
//   },
//   stars3: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     background:
//       "url('https://raw.githubusercontent.com/karthik947/stars-bg/main/stars3.png') repeat",
//     animation: "moveStars 300s linear infinite",
//     zIndex: 0,
//   },
//   card: {
//     position: "relative",
//     backgroundColor: "rgba(255, 255, 255, 0.1)",
//     backdropFilter: "blur(15px)",
//     borderRadius: "20px",
//     padding: "40px",
//     width: "90%",
//     maxWidth: "450px",
//     textAlign: "center",
//     color: "#fff",
//     zIndex: 1,
//     boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
//   },
//   title: {
//     fontSize: "28px",
//     marginBottom: "20px",
//   },
//   info: {
//     fontSize: "18px",
//     marginBottom: "30px",
//   },
//   actions: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   button: {
//     padding: "14px",
//     fontSize: "16px",
//     backgroundColor: "#4caf50",
//     color: "#fff",
//     border: "none",
//     borderRadius: "10px",
//     cursor: "pointer",
//     transition: "all 0.3s ease-in-out",
//   },
// };




import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/student/me", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => setUser(res.data))
      .catch(() => {
        alert("Session expired. Please login again.");
        localStorage.removeItem("token");
        navigate("/");
      });
  }, [navigate]);

  // Copy animated background from Signup
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

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome, {user.name} ✨</h2>
        <p style={styles.info}><strong>Email:</strong> {user.email}</p>
        <div style={styles.actions}>
          <button style={styles.button} onClick={() => navigate("/profile")}>
            Go to Profile
          </button>
          <button style={styles.button} onClick={() => navigate("/students")}>
            View All Students
          </button>
        </div>
      </div>

      <style>{`
        body {
          margin: 0;
          overflow: hidden;
          background: #000;
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
          0% { opacity: 0.2; transform: scale(0.6) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.5) rotate(45deg); }
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
      `}</style>
    </div>
  );
}

const styles = {
  pageWrapper: {
    height: "100vh",
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Poppins', sans-serif",
    position: "relative",
    zIndex: 1,
  },
  card: {
    backgroundColor: "#ffffff10",
    backdropFilter: "blur(15px)",
    borderRadius: "20px",
    padding: "40px",
    width: "90%",
    maxWidth: "450px",
    textAlign: "center",
    color: "#fff",
    zIndex: 2,
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
  },
  info: {
    fontSize: "18px",
    marginBottom: "30px",
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  button: {
    padding: "14px",
    fontSize: "16px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
  },
};
