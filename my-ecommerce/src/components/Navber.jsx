import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("isLoggedIn");

    navigate("/login");
  };

  return (

    <nav className="navbar">

      <h2>MyStore</h2>

      <div className="nav-links">

        <Link to="/home">Home</Link>

        <Link to="/work">Work</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/profile">Profile</Link>

        <Link to="/deposit">Deposit</Link>

        <Link to="/withdraw">Withdraw</Link>

        <button onClick={logout}>
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;