// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function AllStudents() {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/student/all")
//       .then((res) => setStudents(res.data));
//   }, []);

//   return (
//     <div>
//       <h2>All Students</h2>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Fees Paid</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((s) => (
//             <tr key={s._id}>
//               <td>{s.name}</td>
//               <td>{s.email}</td>
//               <td>{s.feesPaid ? "Yes" : "No"}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./AllStudents.css"; // <- Make sure this is imported

// export default function AllStudents() {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/student/all")
//       .then((res) => setStudents(res.data));
//   }, []);

//   return (
//     <div className="all-students-page">
//       <h2>All Students</h2>
//       <table className="student-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Fees Paid</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((s) => (
//             <tr key={s._id}>
//               <td>{s.name}</td>
//               <td>{s.email}</td>
//               <td>{s.feesPaid ? "Yes" : "No"}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import axios from "axios";
import "./AllStudents.css";

export default function AllStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/student/all")
      .then((res) => setStudents(res.data));
  }, []);

  // Star background effect
  useEffect(() => {
    const numStars = 100;
    const container = document.querySelector(".stars-bg");

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`; // Faster twinkle
      container.appendChild(star);
    }
  }, []);

  return (
    <div className="all-students-page">
      <div className="stars-bg"></div>
      <h2>All Students</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Fees Paid</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s._id}>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.feesPaid ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
