// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <nav>
//       {token ? (
//         <>
//           <Link to="/students">All Students</Link> |{" "}
//           <Link to="/profile">Profile</Link> |{" "}
//           <button onClick={handleLogout}>Logout</button>
//         </>
//       ) : (
//         <>
//           {/* <Link to="/">Login</Link> | <Link to="/signup">Signup</Link> */}
//         </>
//       )}
//     </nav>
//   );
// }



import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"; // Import the CSS

export default function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar">
      {token ? (
        <div className="nav-links">
          <Link to="/students" className="nav-link">All Students</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
          <button className="nav-button" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="nav-links">
          {/* <Link to="/" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link">Signup</Link> */}
        </div>
      )}
    </nav>
  );
}
