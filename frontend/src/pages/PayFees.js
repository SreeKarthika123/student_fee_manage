


// src/pages/PayFees.js
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function PayFees() {
//   const [method, setMethod] = useState("Credit Card");
//   const [card, setCard] = useState("");
//   const [expiry, setExp] = useState("");
//   const [cvv, setCvv] = useState("");
//   const navigate = useNavigate();

//   const handlePayment = async () => {
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/student/pay",
//         { method },
//         { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
//       );
//       navigate("/receipt", { state: res.data });
//     } catch (err) {
//       alert("Payment Failed");
//     }
//   };

//   return (
//     <div>
//       <h2>Fee Payment Page</h2>
//       <select value={method} onChange={e => setMethod(e.target.value)}>
//         {["Credit Card","UPI","NetBanking","Wallet"].map(m => (
//           <option key={m} value={m}>{m}</option>
//         ))}
//       </select><br /><br />
//       <input placeholder="Card Number" value={card} onChange={e => setCard(e.target.value)} /><br />
//       <input placeholder="Expiry (MM/YY)" value={expiry} onChange={e => setExp(e.target.value)} /><br />
//       <input type="password" placeholder="CVV" value={cvv} onChange={e => setCvv(e.target.value)} /><br />
//       <button onClick={handlePayment}>Pay Now</button>
//     </div>
//   );
// }



// // src/pages/PayFees.js
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function PayFees() {
//   const [method, setMethod] = useState("Credit Card");
//   const [amount, setAmount] = useState("");
//   const [card, setCard] = useState("");
//   const [expiry, setExp] = useState("");
//   const [cvv, setCvv] = useState("");
//   const [upiId, setUpiId] = useState("");
//   const [walletId, setWalletId] = useState("");
//   const [netbankingRef, setNetbankingRef] = useState("");
//   const navigate = useNavigate();

//   const handlePayment = async () => {
//     if (!amount || isNaN(amount)) {
//       alert("Please enter a valid amount.");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/student/pay",
//         { method, amount },
//         {
//           headers: {
//             Authorization: "Bearer " + localStorage.getItem("token"),
//           },
//         }
//       );

//       navigate("/receipt", { state: res.data });
//     } catch (err) {
//       alert("Payment Failed");
//     }
//   };

//   const renderPaymentFields = () => {
//     switch (method) {
//       case "Credit Card":
//         return (
//           <>
//             <input
//               placeholder="Card Number"
//               value={card}
//               onChange={(e) => setCard(e.target.value)}
//             />
//             <br />
//             <input
//               placeholder="Expiry (MM/YY)"
//               value={expiry}
//               onChange={(e) => setExp(e.target.value)}
//             />
//             <br />
//             <input
//               type="password"
//               placeholder="CVV"
//               value={cvv}
//               onChange={(e) => setCvv(e.target.value)}
//             />
//             <br />
//           </>
//         );
//       case "UPI":
//         return (
//           <>
//             <input
//               placeholder="UPI ID (e.g. name@upi)"
//               value={upiId}
//               onChange={(e) => setUpiId(e.target.value)}
//             />
//             <br />
//           </>
//         );
//       case "Wallet":
//         return (
//           <>
//             <input
//               placeholder="Wallet ID / Number"
//               value={walletId}
//               onChange={(e) => setWalletId(e.target.value)}
//             />
//             <br />
//           </>
//         );
//       case "NetBanking":
//         return (
//           <>
//             <input
//               placeholder="Transaction Reference ID"
//               value={netbankingRef}
//               onChange={(e) => setNetbankingRef(e.target.value)}
//             />
//             <br />
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <h2>🧾 Fee Payment Page</h2>
//       <p>This is a simulation. No real payment is processed.</p>

//       <label>Amount:</label>
//       <input
//         placeholder="Enter amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       />
//       <br /><br />

//       <label>Payment Method:</label>
//       <select value={method} onChange={(e) => setMethod(e.target.value)}>
//         {["Credit Card", "UPI", "NetBanking", "Wallet"].map((m) => (
//           <option key={m} value={m}>
//             {m}
//           </option>
//         ))}
//       </select>
//       <br /><br />

//       {renderPaymentFields()}

//       <button onClick={handlePayment}>Pay Now</button>
//     </div>
//   );
// }



// src/pages/PayFees.js
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// export default function PayFees() {
//   const [method, setMethod] = useState("Credit Card");
//   const [amount, setAmount] = useState("");
//   const [card, setCard] = useState("");
//   const [expiry, setExp] = useState("");
//   const [cvv, setCvv] = useState("");
//   const [upiId, setUpiId] = useState("");
//   const [walletId, setWalletId] = useState("");
//   const [netbankingRef, setNetbankingRef] = useState("");
//   const navigate = useNavigate();

//   const handlePayment = async () => {
//     if (!amount || isNaN(amount)) {
//       toast.error("Please enter a valid amount.");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/student/pay",
//         { method, amount },
//         {
//           headers: {
//             Authorization: "Bearer " + localStorage.getItem("token"),
//           },
//         }
//       );
      

//       toast.success("🎉 Payment Successful!");
//       setTimeout(() => {
//         navigate("/receipt", { state: res.data });
//       }, 1500);
//     } catch (err) {
//       toast.error("Payment Failed. Please try again.");
//     }
//   };

//   const renderPaymentFields = () => {
//     switch (method) {
//       case "Credit Card":
//         return (
//           <>
//             <input
//               placeholder="Card Number"
//               value={card}
//               onChange={(e) => setCard(e.target.value)}
//             /><br />
//             <input
//               placeholder="Expiry (MM/YY)"
//               value={expiry}
//               onChange={(e) => setExp(e.target.value)}
//             /><br />
//             <input
//               type="password"
//               placeholder="CVV"
//               value={cvv}
//               onChange={(e) => setCvv(e.target.value)}
//             /><br />
//           </>
//         );
//       case "UPI":
//         return (
//           <>
//             <input
//               placeholder="UPI ID (e.g. name@upi)"
//               value={upiId}
//               onChange={(e) => setUpiId(e.target.value)}
//             /><br />
//           </>
//         );
//       case "Wallet":
//         return (
//           <>
//             <input
//               placeholder="Wallet ID / Number"
//               value={walletId}
//               onChange={(e) => setWalletId(e.target.value)}
//             /><br />
//           </>
//         );
//       case "NetBanking":
//         return (
//           <>
//             <input
//               placeholder="Transaction Reference ID"
//               value={netbankingRef}
//               onChange={(e) => setNetbankingRef(e.target.value)}
//             /><br />
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <h2>🧾 Fee Payment Page</h2>
//       <p>This is a simulation. No real payment is processed.</p>

//       <label>Amount:</label>
//       <input
//         placeholder="Enter amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       /><br /><br />

//       <label>Payment Method:</label>
//       <select value={method} onChange={(e) => setMethod(e.target.value)}>
//         {["Credit Card", "UPI", "NetBanking", "Wallet"].map((m) => (
//           <option key={m} value={m}>{m}</option>
//         ))}
//       </select><br /><br />

//       {renderPaymentFields()}

//       <button onClick={handlePayment}>Pay Now</button>
//     </div>
//   );
// }




import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function PayFees() {
  const [method, setMethod] = useState("Credit Card");
  const [amount, setAmount] = useState("");
  const [card, setCard] = useState("");
  const [expiry, setExp] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");
  const [walletId, setWalletId] = useState("");
  const [netbankingRef, setNetbankingRef] = useState("");
  const navigate = useNavigate();

  const handlePayment = async () => {
    if (!amount || isNaN(amount)) {
      toast.error("Please enter a valid amount.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/student/pay",
        { method, amount },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      toast.success("🎉 Payment Successful!");
      setTimeout(() => {
        navigate("/profile", { state: res.data });
      }, 1500);
    } catch (err) {
      toast.error("Payment Failed. Please try again.");
    }
  };

  const renderPaymentFields = () => {
    switch (method) {
      case "Credit Card":
        return (
          <>
            <input style={styles.input} placeholder="Card Number" value={card} onChange={(e) => setCard(e.target.value)} />
            <input style={styles.input} placeholder="Expiry (MM/YY)" value={expiry} onChange={(e) => setExp(e.target.value)} />
            <input style={styles.input} type="password" placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} />
          </>
        );
      case "UPI":
        return (
          <input style={styles.input} placeholder="UPI ID (e.g. name@upi)" value={upiId} onChange={(e) => setUpiId(e.target.value)} />
        );
      case "Wallet":
        return (
          <input style={styles.input} placeholder="Wallet ID / Number" value={walletId} onChange={(e) => setWalletId(e.target.value)} />
        );
      case "NetBanking":
        return (
          <input style={styles.input} placeholder="Transaction Reference ID" value={netbankingRef} onChange={(e) => setNetbankingRef(e.target.value)} />
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h2 style={styles.heading}>🧾 Fee Payment</h2>
        <p style={styles.subtext}>This is a simulation. No real payment is processed.</p>

        <label style={styles.label}>Amount:</label>
        <input
          style={styles.input}
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label style={styles.label}>Payment Method:</label>
        <select style={styles.input} value={method} onChange={(e) => setMethod(e.target.value)}>
          {["Credit Card", "UPI", "NetBanking", "Wallet"].map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        {renderPaymentFields()}

        <button style={styles.button} onClick={handlePayment}>Pay Now</button>
      </div>
    </div>
  );
}

const styles = {
  background: {
    height: "100vh",
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#f9f9f9",
    padding: "40px",
    borderRadius: "12px",
    width: "400px",
    boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
    textAlign: "center",
  },
  heading: {
    marginBottom: "10px",
    fontSize: "24px",
  },
  subtext: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "20px",
  },
  label: {
    display: "block",
    textAlign: "left",
    margin: "10px 0 5px 0",
    fontWeight: "bold",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
};
