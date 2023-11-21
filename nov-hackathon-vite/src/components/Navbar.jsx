import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-area">
      <h1 className="dashboard">Dashboard</h1>
      <div className="navbar-container">
        <Link to="/outcomes">
          <div className="nav-items">Outcomes</div>
        </Link>
        <Link to="/SEI">
          <div className="nav-items">SEI</div>
        </Link>
        <Link to="/channel">
          <div className="nav-items">Online Communities</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
