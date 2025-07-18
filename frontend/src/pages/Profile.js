// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Profile() {
//   const [user, setUser] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/student/me", {
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//       })
//       .then((res) => setUser(res.data));
//   }, []);

//   const payFees = async () => {
//     await axios.post(
//       "http://localhost:5000/api/student/pay",
//       {},
//       {
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//       }
//     );
//     navigate("/pay");
//   };

//   return (
//     <div>
//       <h2>Profile</h2>
//       <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//       <p>Fees Paid: {user.feesPaid ? "Yes" : "No"}</p>
//       {!user.feesPaid && <button onClick={payFees}>Pay Fees</button>}
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Profile() {
//   const [user, setUser] = useState({});
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/student/me", {
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//       })
//       .then((res) => {
//         setUser(res.data);
//         setName(res.data.name);
//         setEmail(res.data.email);
//       });
//   }, []);
//   const goToPayment = () => {
//   navigate("/pay");
// };


// //   const payFees = async () => {
// //     await axios.post(
// //       "http://localhost:5000/api/student/pay",
// //       {},
// //       {
// //         headers: {
// //           Authorization: "Bearer " + localStorage.getItem("token"),
// //         },
// //       }
// //     );
// //     navigate("/pay");
// //   };

//   const updateDetails = async () => {
//     try {
//       const res = await axios.put(
//         "http://localhost:5000/api/student/me",
//         { name, email },
//         {
//           headers: {
//             Authorization: "Bearer " + localStorage.getItem("token"),
//           },
//         }
//       );
//       setUser(res.data);
//       alert("Profile updated successfully!");
//     } catch (err) {
//       alert("Failed to update profile.");
//     }
//   };

//   return (
//     <div>
//       <h2>Profile</h2>

//       <label>Name:</label>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       /><br />

//       <label>Email:</label>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       /><br />

// //       <button onClick={updateDetails}>Update</button>

// //       <p>Fees Paid: {user.feesPaid ? "Yes" : "No"}</p>
// //       {!user.feesPaid && <button onClick={goToPayment}>Pay Fees</button>}

// //       {/* {!user.feesPaid && <button onClick={payFees}>Pay Fees</button>} */}
// //     </div>
// //   );
// // }


// // import { Link } from "react-router-dom";


// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // export default function Profile() {
// //   const [user, setUser] = useState({});
// //   const [payments, setPayments] = useState([]);
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");

// //     // Get user profile
// //     axios
// //       .get("http://localhost:5000/api/student/me", {
// //         headers: { Authorization: "Bearer " + token },
// //       })
// //       .then((res) => {
// //         setUser(res.data);
// //         setName(res.data.name);
// //         setEmail(res.data.email);
// //       });

// //     // Get payment history
// //     axios
// //       .get("http://localhost:5000/api/student/payments", {
// //         headers: { Authorization: "Bearer " + token },
// //       })
// //       .then((res) => setPayments(res.data));
// //   }, []);

// //   const updateDetails = async () => {
// //     try {
// //       const res = await axios.put(
// //         "http://localhost:5000/api/student/me",
// //         { name, email },
// //         {
// //           headers: {
// //             Authorization: "Bearer " + localStorage.getItem("token"),
// //           },
// //         }
// //       );
// //       setUser(res.data);
// //       alert("Profile updated successfully!");
// //     } catch (err) {
// //       alert("Failed to update profile.");
// //     }
// //   };

// //   const goToPayment = () => navigate("/pay");

// //   return (
// //     <div>
// //       <h2>Profile</h2>
// //       <label>Name:</label>
// //       <input value={name} onChange={(e) => setName(e.target.value)} /><br />
// //       <label>Email:</label>
// //       <input value={email} onChange={(e) => setEmail(e.target.value)} /><br />
// //       <button onClick={updateDetails}>Update</button>
// //       <p>Fees Paid: {user.feesPaid ? "Yes" : "No"}</p>
// //       {!user.feesPaid && <button onClick={goToPayment}>Pay Fees</button>}

// //       <h3>🧾 My Payments</h3>
// //       {payments.length === 0 ? (
// //         <p>No payment history found.</p>
// //       ) : (
// //         <table border="1">
// //           <thead>
// //             <tr>
// //               <th>Date</th>
// //               <th>Method</th>
// //               <th>Status</th>
// //             </tr>
// //           </thead>
// //           {/* // Inside payments table in Profile.js */}
// // <tbody>
// //   {payments.map(p => (
// //     <tr key={p._id}>
// //       <td>{new Date(p.date).toLocaleDateString()}</td>
// //       <td>{p.method}</td>
// //       <td>{p.status}</td>
// //       <td>
// //         <Link to="/receipt" state={{ payment: p, studentName: user.name }}>
// //           View Receipt
// //         </Link>
// //       </td>
// //     </tr>
// //   ))}
// // </tbody>

// //           {/* <tbody>
// //             {payments.map((p) => (
// //               <tr key={p._id}>
// //                 <td>{new Date(p.date).toLocaleDateString()}</td>
// //                 <td>{p.method}</td>
// //                 <td>{p.status}</td>
// //               </tr>
// //             ))}
// //           </tbody> */}
// //         </table>
// //       )}
// //     </div>
// //   );
// // }
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import confetti from "canvas-confetti";

// export default function Profile() {
//   const [user, setUser] = useState({});
//   const [payments, setPayments] = useState([]);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [modalMessage, setModalMessage] = useState("");
//   const [modalVisible, setModalVisible] = useState(false);
//   const [showBoomer, setShowBoomer] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     axios
//       .get("http://localhost:5000/api/student/me", {
//         headers: { Authorization: "Bearer " + token },
//       })
//       .then((res) => {
//         setUser(res.data);
//         setName(res.data.name);
//         setEmail(res.data.email);
//       });

//     axios
//       .get("http://localhost:5000/api/student/payments", {
//         headers: { Authorization: "Bearer " + token },
//       })
//       .then((res) => setPayments(res.data));
//   }, []);

//   useEffect(() => {
//     const stars = [];
//     const balls = [];

//     for (let i = 0; i < 50; i++) {
//       const star = document.createElement("div");
//       star.className = "star";
//       star.style.top = `${Math.random() * 100}%`;
//       star.style.left = `${Math.random() * 100}%`;
//       star.style.animationDuration = `${2 + Math.random() * 3}s`;
//       document.body.appendChild(star);
//       stars.push(star);
//     }

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

//   const updateDetails = async () => {
//     try {
//       const res = await axios.put(
//         "http://localhost:5000/api/student/me",
//         { name, email },
//         {
//           headers: {
//             Authorization: "Bearer " + localStorage.getItem("token"),
//           },
//         }
//       );
//       setUser(res.data);
//       setModalMessage("✅ Profile updated successfully!");
//       setModalVisible(true);
//       setShowBoomer(true);

//       const myConfetti = confetti.create(document.body, { resize: true });
//       myConfetti({ particleCount: 200, spread: 160 });

//       setTimeout(() => {
//         setModalVisible(false);
//         setShowBoomer(false);
//       }, 2000);
//     } catch (err) {
//       setModalMessage("❌ Failed to update profile.");
//       setModalVisible(true);
//       setTimeout(() => setModalVisible(false), 2500);
//     }
//   };

//   const goToPayment = () => navigate("/pay");

//   return (
//     <div style={styles.background}>
//       <div style={styles.card} className="signup-hover">
//         <h2 style={styles.title}>My Profile</h2>

//         <input
//           style={styles.input}
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Name"
//         />
//         <input
//           style={styles.input}
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//         />

//         <button onClick={updateDetails} style={styles.button}>
//           Update Profile
//         </button>

//         <p style={styles.status}>
//           Fees Paid: <strong>{user.feesPaid ? "✅ Yes" : "❌ No"}</strong>
//         </p>

//         {!user.feesPaid && (
//           <button onClick={goToPayment} style={styles.buttonAlt}>
//             Pay Fees
//           </button>
//         )}

//         <h3 style={styles.title}>Payment History</h3>
//         {payments.length === 0 ? (
//           <p style={{ color: "#ccc" }}>No payment history.</p>
//         ) : (
//           <table style={styles.table}>
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Method</th>
//                 <th>Status</th>
//                 <th>Receipt</th>
//               </tr>
//             </thead>
//             <tbody>
//               {payments.map((p) => (
//                 <tr key={p._id}>
//                   <td>{new Date(p.date).toLocaleDateString()}</td>
//                   <td>{p.method}</td>
//                   <td>{p.status}</td>
//                   <td>
//                     <Link
//                       to="/receipt"
//                       state={{ payment: p, studentName: user.name }}
//                     >
//                       View
//                     </Link>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}

//         {modalVisible && (
//           <div style={styles.modalOverlay}>
//             <div style={styles.modalBox}>
//               <p>{modalMessage}</p>
//             </div>
//           </div>
//         )}

//         {showBoomer && <div className="boomer-pop">🎉 Woohoo!</div>}
//       </div>

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

//         .signup-hover:hover {
//           box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
//           transform: scale(1.02);
//           transition: all 0.3s ease;
//         }

//         .boomer-pop {
//           position: fixed;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           font-size: 3rem;
//           color: gold;
//           font-weight: bold;
//           animation: boomFade 2s ease-out forwards;
//           z-index: 9999;
//           pointer-events: none;
//         }

//         @keyframes boomFade {
//           0% {
//             opacity: 0;
//             transform: translate(-50%, -50%) scale(0.7) rotate(0deg);
//           }
//           50% {
//             opacity: 1;
//             transform: translate(-50%, -50%) scale(1.3) rotate(10deg);
//           }
//           100% {
//             opacity: 0;
//             transform: translate(-50%, -50%) scale(1) rotate(-15deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// const styles = {
//   background: {
//   minHeight: "100vh",
//   backgroundColor: "#000",
//   display: "flex",
//   alignItems: "flex-start",   // ⬅️ Move content to top
//   justifyContent: "center",
//   padding: "3rem 2rem 2rem 2rem", // ⬅️ More top padding if needed
// },

//   // background: {
//   //   minHeight: "100vh",
//   //   backgroundColor: "#000",
//   //   display: "flex",
//   //   alignItems: "center",
//   //   justifyContent: "center",
//   //   padding: "2rem",
//   // },
//   card: {
//     backgroundColor: "#f8f9fa",
//     padding: "40px 30px",
//     borderRadius: "12px",
//     width: "100%",
//     maxWidth: "600px",
//     boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
//     textAlign: "center",
//   },
//   title: {
//     marginBottom: "20px",
//     color: "#333",
//   },
//   input: {
//     width: "100%",
//     padding: "12px 14px",
//     margin: "10px 0",
//     border: "1px solid #ccc",
//     borderRadius: "8px",
//     fontSize: "14px",
//   },
//   button: {
//     padding: "10px 20px",
//     backgroundColor: "#000",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     fontSize: "16px",
//     cursor: "pointer",
//     marginTop: "10px",
//     width: "100%",
//   },
//   buttonAlt: {
//     ...this?.button,
//     backgroundColor: "#28a745",
//     marginTop: "10px",
//   },
//   status: {
//     marginTop: "15px",
//     color: "#555",
//     fontWeight: "bold",
//   },
//   table: {
//     width: "100%",
//     marginTop: "20px",
//     borderCollapse: "collapse",
//     color: "#222",
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



import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// import confetti from "canvas-confetti";

export default function Profile() {
  const [user, setUser] = useState({});
  const [payments, setPayments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [modalMessage] = useState("");
  const [modalVisible] = useState(false);
  const [showBoomer] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:5000/api/student/me", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setUser(res.data);
        setName(res.data.name);
        setEmail(res.data.email);
      });

    axios
      .get("http://localhost:5000/api/student/payments", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => setPayments(res.data));
  }, []);

  // STAR + BALL background logic
  useEffect(() => {
    const container = document.querySelector(".stars-bg");
    const stars = [];
    const balls = [];

    for (let i = 0; i < 60; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${2 + Math.random() * 3}s`;
      container.appendChild(star);
      stars.push(star);
    }

    for (let i = 0; i < 12; i++) {
      const ball = document.createElement("div");
      ball.className = "ball";
      ball.style.top = `${Math.random() * 100}%`;
      ball.style.left = `${Math.random() * 100}%`;
      ball.style.animationDuration = `${3 + Math.random() * 3}s`;
      ball.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(ball);
      balls.push(ball);
    }

    return () => {
      stars.forEach((s) => container.removeChild(s));
      balls.forEach((b) => container.removeChild(b));
    };
  }, []);

//   const updateDetails = async () => {
//   try {
//     const res = await axios.put(
//       "http://localhost:5000/api/student/me",
//       { name, email },
//       {
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//         validateStatus: () => true, // ← allows all responses through to 'then'
//       }
//     );
//     console.log("Response status:", res.status);
//     console.log("Response data:", res.data);

//     if (res.status >= 200 && res.status < 300) {
//       setUser(res.data);
//       setModalMessage("✅ Profile updated successfully!");
//       setModalVisible(true);
//       setShowBoomer(true);

//       confetti.create(document.body, { resize: true })({
//         particleCount: 200,
//         spread: 160,
//       });

//       setTimeout(() => {
//         setModalVisible(false);
//         setShowBoomer(false);
//       }, 2000);
//     } else {
//       throw new Error("Update failed"); // ← this triggers catch block
//     }
//   } catch (err) {
//     console.error("Update error:", err);
//     setModalMessage("❌ Failed to update profile.");
//     setModalVisible(true);
//     setTimeout(() => setModalVisible(false), 2500);
//   }
// };

const updateDetails = async () => {
  try {
    const res = await axios.put(
      "http://localhost:5000/api/student/me",
      { name, email },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        validateStatus: () => true, // Allow all responses
      }
    );

    console.log("Response status:", res.status);
    console.log("Response data:", res.data);

    if (res.status >= 200 && res.status < 300) {
      setUser(res.data); // Update local user state
    } else {
      console.error("❌ Failed to update profile.");
    }
  } catch (err) {
    console.error("Update error:", err);
  }
};


  // const updateDetails = async () => {
  //   try {
  //     const res = await axios.put(
  //       "http://localhost:5000/api/student/me",
  //       { name, email },
  //       {
  //         headers: {
  //           Authorization: "Bearer " + localStorage.getItem("token"),
  //         },
  //       }
  //     );
  //     setUser(res.data);
  //     setModalMessage("✅ Profile updated successfully!");
  //     setModalVisible(true);
  //     setShowBoomer(true);

  //     confetti.create(document.body, { resize: true })({
  //       particleCount: 200,
  //       spread: 160,
  //     });

  //     setTimeout(() => {
  //       setModalVisible(false);
  //       setShowBoomer(false);
  //     }, 2000);
  //   } catch {
  //     setModalMessage("❌ Failed to update profile.");
  //     setModalVisible(true);
  //     setTimeout(() => setModalVisible(false), 2500);
  //   }
  // };

  const goToPayment = () => navigate("/pay");

  return (
    <div style={styles.background}>
      <div className="stars-bg"></div>

      <div style={styles.card} className="signup-hover">
        <h2 style={styles.title}>My Profile</h2>

        <input
          style={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <button onClick={updateDetails} style={styles.button}>
          Update Profile
        </button>

        <p style={styles.status}>
          Fees Paid: <strong>{user.feesPaid ? "✅ Yes" : "❌ No"}</strong>
        </p>

        {!user.feesPaid && (
          <button onClick={goToPayment} style={styles.buttonAlt}>
            Pay Fees
          </button>
        )}

        <h3 style={styles.title}>Payment History</h3>
        {payments.length === 0 ? (
          <p style={{ color: "#ccc" }}>No payment history.</p>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Method</th>
                <th>Status</th>
                <th>Receipt</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p) => (
                <tr key={p._id}>
                  <td>{new Date(p.date).toLocaleDateString()}</td>
                  <td>{p.method}</td>
                  <td>{p.status}</td>
                  <td>
                    <Link
                      to="/receipt"
                      state={{ payment: p, studentName: user.name }}
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {modalVisible && (
          <div style={styles.modalOverlay}>
            <div style={styles.modalBox}>
              <p>{modalMessage}</p>
            </div>
          </div>
        )}

        {showBoomer && <div className="boomer-pop">🎉 Woohoo!</div>}
      </div>

      {/* CSS-IN-JS Stars, Balls, Hover, Boomer */}
      <style>{`
        .stars-bg {
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle infinite alternate;
        }

        .ball {
          position: absolute;
          width: 15px;
          height: 15px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          animation: bounceDiagonal infinite;
        }

        @keyframes twinkle {
          from { opacity: 0.2; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1.2); }
        }

        @keyframes bounceDiagonal {
          0%   { transform: translate(0, 0); }
          25%  { transform: translate(30px, -50px); }
          50%  { transform: translate(60px, 0); }
          75%  { transform: translate(30px, 50px); }
          100% { transform: translate(0, 0); }
        }

        .signup-hover:hover {
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          transform: scale(1.02);
          transition: all 0.3s ease;
        }

        .boomer-pop {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 3rem;
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
    minHeight: "100vh",
    backgroundColor: "#000",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "3rem 2rem 2rem 2rem",
    position: "relative",
  },
  card: {
    backgroundColor: "#f8f9fa",
    padding: "40px 30px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "600px",
    boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
    textAlign: "center",
    zIndex: 1,
    position: "relative",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "14px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
    width: "100%",
  },
  buttonAlt: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
    width: "100%",
  },
  status: {
    marginTop: "15px",
    color: "#555",
    fontWeight: "bold",
  },
  table: {
    width: "100%",
    marginTop: "20px",
    borderCollapse: "collapse",
    color: "#222",
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
