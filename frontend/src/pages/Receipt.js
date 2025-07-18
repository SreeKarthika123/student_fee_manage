// import { useLocation, useNavigate } from "react-router-dom";
// import { jsPDF } from "jspdf";

// export default function Receipt() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const payment = location.state;

//   const downloadReceipt = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(16);
//     doc.text("Payment Receipt", 20, 20);
//     doc.setFontSize(12);
//     doc.text(`Payment ID: ${payment.paymentId}`, 20, 40);
//     doc.text(`Method: ${payment.method}`, 20, 50);
//     doc.text(`Date: ${new Date(payment.date).toLocaleString()}`, 20, 60);
//     doc.text(`Status: ${payment.status}`, 20, 70);
//     doc.save("receipt.pdf");
//   };

//   if (!payment) return <p>No payment info available</p>;

//   return (
//     <div>
//       <h2>Payment Successful ✅</h2>
//       <p><b>Payment ID:</b> {payment.paymentId}</p>
//       <p><b>Method:</b> {payment.method}</p>
//       <p><b>Date:</b> {new Date(payment.date).toLocaleString()}</p>
//       <p><b>Status:</b> {payment.status}</p>

//       <button onClick={downloadReceipt}>Download Receipt PDF</button><br /><br />
//       <button onClick={() => navigate("/profile")}>Go to Profile</button>
//     </div>
//   );
// }



// // src/pages/Receipt.js
// import { useLocation, useNavigate } from "react-router-dom";
// import { jsPDF } from "jspdf";
// // import { QRCode } from "qrcode.react";
// import { QRCodeSVG } from "qrcode.react";
// export default function Receipt() {
//   const { state } = useLocation();
//   const { payment, studentName } = state || {};
//   const navigate = useNavigate();

//   const downloadReceipt = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(16);
//     doc.text("🎓 Student Fee Receipt", 20, 20);
//     doc.setFontSize(12);
//     doc.text(`Name: ${studentName}`, 20, 40);
//     doc.text(`Payment ID: ${payment.paymentId}`, 20, 50);
//     doc.text(`Method: ${payment.method}`, 20, 60);
//     doc.text(`Date: ${new Date(payment.date).toLocaleString()}`, 20, 70);
//     doc.text(`Status: ${payment.status}`, 20, 80);
//     doc.save(`receipt-${payment.paymentId}.pdf`);
//   };

//   if (!payment) return <p>No payment info available.</p>;

//   return (
//     <div style={{ border: "1px solid #ccc", padding: "20px", maxWidth: "400px", margin: "auto" }}>
//       <h2 style={{ textAlign: "center" }}>Payment Successful ✅</h2>
//       <p><b>Name:</b> {studentName}</p>
//       <p><b>Payment ID:</b> {payment.paymentId}</p>
//       <p><b>Method:</b> {payment.method}</p>
//       <p><b>Date:</b> {new Date(payment.date).toLocaleString()}</p>
//       <p><b>Status:</b> {payment.status}</p>
//       <div style={{ textAlign: "center", margin: "20px" }}>
//         <QRCodeSVG value={payment.paymentId} size={100} />
//         {/* <QRCode value={payment.paymentId} size={100} /> */}
//       </div>
//       <button onClick={downloadReceipt}>Download Receipt PDF</button><br /><br />
//       <button onClick={() => navigate("/profile")}>Go to Profile</button>
//     </div>
//   );
// }



// // src/pages/Receipt.js
// import { useLocation, useNavigate } from "react-router-dom";
// import { jsPDF } from "jspdf";
// import { QRCodeSVG } from "qrcode.react";

// export default function Receipt() {
//   const { state } = useLocation();
//   const { payment, studentName } = state || {};
//   const navigate = useNavigate();

//   const downloadReceipt = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(16);
//     doc.text("🎓 Student Fee Receipt", 20, 20);
//     doc.setFontSize(12);
//     doc.text(`Name: ${studentName}`, 20, 40);
//     doc.text(`Payment ID: ${payment.paymentId}`, 20, 50);
//     doc.text(`Method: ${payment.method}`, 20, 60);
//     doc.text(`Amount: ₹${payment.amount}`, 20, 70);
//     doc.text(`Date: ${new Date(payment.date).toLocaleString()}`, 20, 80);
//     doc.text(`Status: ${payment.status}`, 20, 90);
//     doc.save(`receipt-${payment.paymentId}.pdf`);
//   };

//   // if (!payment) return <p>No payment info available.</p>;

//   return (
//     <div style={{ border: "1px solid #ccc", padding: "20px", maxWidth: "400px", margin: "auto" }}>
//       <h2 style={{ textAlign: "center" }}>Payment Successful ✅</h2>
//       <p><b>Name:</b> {studentName}</p>
//       <p><b>Payment ID:</b> {payment.paymentId}</p>
//       <p><b>Method:</b> {payment.method}</p>
//       <p><b>Amount:</b> ₹{payment.amount}</p>
//       <p><b>Date:</b> {new Date(payment.date).toLocaleString()}</p>
//       <p><b>Status:</b> {payment.status}</p>

//       <div style={{ textAlign: "center", margin: "20px" }}>
//         <QRCodeSVG value={payment.paymentId} size={100} />
//       </div>

//       <button onClick={downloadReceipt}>Download Receipt PDF</button><br /><br />
//       <button onClick={() => navigate("/profile")}>Go to Profile</button>
//     </div>
//   );
// }





// import { useLocation, useNavigate } from "react-router-dom";
// import { jsPDF } from "jspdf";
// import { QRCodeSVG } from "qrcode.react";
// import { useEffect } from "react";
// import confetti from "canvas-confetti";
// import "./Receipt.css"; // 👈 Custom CSS file

// export default function Receipt() {
//   const { state } = useLocation();
//   const { payment, studentName } = state || {};
//   const navigate = useNavigate();

//   const downloadReceipt = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(16);
//     doc.text("🎓 Student Fee Receipt", 20, 20);
//     doc.setFontSize(12);
//     doc.text(`Name: ${studentName}`, 20, 40);
//     doc.text(`Payment ID: ${payment.paymentId}`, 20, 50);
//     doc.text(`Method: ${payment.method}`, 20, 60);
//     doc.text(`Amount: ₹${payment.amount}`, 20, 70);
//     doc.text(`Date: ${new Date(payment.date).toLocaleString()}`, 20, 80);
//     doc.text(`Status: ${payment.status}`, 20, 90);
//     doc.save(`receipt-${payment.paymentId}.pdf`);
//   };

//   useEffect(() => {
//     confetti({
//       particleCount: 150,
//       spread: 90,
//       origin: { y: 0.6 },
//     });
//   }, []);

//   return (
//     <div className="receipt-page">
//       <div className="receipt-container">
//         <h2>Payment Successful ✅</h2>
//         <p><b>Name:</b> {studentName}</p>
//         <p><b>Payment ID:</b> {payment.paymentId}</p>
//         <p><b>Method:</b> {payment.method}</p>
//         <p><b>Amount:</b> ₹{payment.amount}</p>
//         <p><b>Date:</b> {new Date(payment.date).toLocaleString()}</p>
//         <p><b>Status:</b> {payment.status}</p>

//         <div className="qrcode-box">
//           <QRCodeSVG value={payment.paymentId} size={100} />
//         </div>

//         <button className="btn" onClick={downloadReceipt}>Download PDF</button>
//         <button className="btn secondary" onClick={() => navigate("/profile")}>
//           Go to Profile
//         </button>
//       </div>
//     </div>
//   );
// }



// import { useLocation, useNavigate } from "react-router-dom";
// import { jsPDF } from "jspdf";
// import { QRCodeSVG } from "qrcode.react";
// import { useEffect } from "react";
// import confetti from "canvas-confetti";
// import "./Receipt.css";

// export default function Receipt() {
//   const { state } = useLocation();
//   const { payment, studentName } = state || {};
//   const navigate = useNavigate();

//   const downloadReceipt = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(16);
//     doc.text("🎓 Student Fee Receipt", 20, 20);
//     doc.setFontSize(12);
//     doc.text(`Name: ${studentName}`, 20, 40);
//     doc.text(`Payment ID: ${payment.paymentId}`, 20, 50);
//     doc.text(`Method: ${payment.method}`, 20, 60);
//     doc.text(`Amount: ₹${payment.amount}`, 20, 70);
//     doc.text(`Date: ${new Date(payment.date).toLocaleString()}`, 20, 80);
//     doc.text(`Status: ${payment.status}`, 20, 90);
//     doc.save(`receipt-${payment.paymentId}.pdf`);
//   };

//   useEffect(() => {
//     confetti({
//       particleCount: 150,
//       spread: 90,
//       origin: { y: 0.6 },
//     });

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
//       balls.forEach((ball) => document.body.removeChild(ball));
//     };
//   }, []);

//   return (
//     <div className="receipt-page">
//       <div className="receipt-container">
//         <h2>Boomer 🎉</h2>
//         <p><b>Name:</b> {studentName}</p>
//         <p><b>Payment ID:</b> {payment.paymentId}</p>
//         <p><b>Method:</b> {payment.method}</p>
//         <p><b>Amount:</b> ₹{payment.amount}</p>
//         <p><b>Date:</b> {new Date(payment.date).toLocaleString()}</p>
//         <p><b>Status:</b> {payment.status}</p>

//         <div className="qrcode-box">
//           <QRCodeSVG value={payment.paymentId} size={100} />
//         </div>

//         <button className="btn" onClick={downloadReceipt}>Download PDF</button>
//         <button className="btn secondary" onClick={() => navigate("/profile")}>
//           Go to Profile
//         </button>
//       </div>
//     </div>
//   );
// }




import { useLocation, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import { QRCodeSVG } from "qrcode.react";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import "./Receipt.css";

export default function Receipt() {
  const { state } = useLocation();
  const { payment, studentName } = state || {};
  const navigate = useNavigate();

  const downloadReceipt = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("🎓 Student Fee Receipt", 20, 20);
    doc.setFontSize(12);
    doc.text(`Name: ${studentName}`, 20, 40);
    doc.text(`Payment ID: ${payment.paymentId}`, 20, 50);
    doc.text(`Method: ${payment.method}`, 20, 60);
    doc.text(`Amount: ₹${payment.amount}`, 20, 70);
    doc.text(`Date: ${new Date(payment.date).toLocaleString()}`, 20, 80);
    doc.text(`Status: ${payment.status}`, 20, 90);
    doc.save(`receipt-${payment.paymentId}.pdf`);
  };

  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
    });

    const balls = [];
    const stars = [];

    for (let i = 0; i < 10; i++) {
      const ball = document.createElement("div");
      ball.className = "ball";
      ball.style.top = `${Math.random() * 100}%`;
      ball.style.left = `${Math.random() * 100}%`;
      ball.style.animationDuration = `${3 + Math.random() * 3}s`;
      ball.style.animationDelay = `${Math.random() * 5}s`;
      document.body.appendChild(ball);
      balls.push(ball);
    }

    for (let i = 0; i < 50; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${2 + Math.random() * 3}s`;
      document.body.appendChild(star);
      stars.push(star);
    }

    return () => {
      balls.forEach((ball) => document.body.removeChild(ball));
      stars.forEach((star) => document.body.removeChild(star));
    };
  }, []);

  return (
    <div className="receipt-page">
      <div className="receipt-container">
        <h2>Download Receipt</h2>
        <p><b>Name:</b> {studentName}</p>
        <p><b>Payment ID:</b> {payment.paymentId}</p>
        <p><b>Method:</b> {payment.method}</p>
        <p><b>Amount:</b> ₹{payment.amount}</p>
        <p><b>Date:</b> {new Date(payment.date).toLocaleString()}</p>
        <p><b>Status:</b> {payment.status}</p>

        <div className="qrcode-box">
          <QRCodeSVG value={payment.paymentId} size={100} />
        </div>

        <button className="btn" onClick={downloadReceipt}>Download PDF</button>
        <button className="btn secondary" onClick={() => navigate("/profile")}>
          Go to Profile
        </button>
      </div>
    </div>
  );
}
