import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-area">
      <h1 className="dashboard">Dashboard</h1>
      <div className="navbar-container">
        <div className="nav-items">Outcomes</div>
        <div className="nav-items">UXDI</div>
        <div className="nav-items">Online Communities</div>
      </div>
    </div>
  );
};

export default Navbar;