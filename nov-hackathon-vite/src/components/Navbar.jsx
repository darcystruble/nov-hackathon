import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  const location = useLocation()
  const activeMenuItemClass = 'active-menu-item'

  return (
    <div className="navbar-area">
      <h1 className="dashboard">Dashboard</h1>
      <div className="navbar-container">
        <Link to="/outcomes" className={location.pathname === '/outcomes' ? activeMenuItemClass : ''}>
          <div className="nav-items">Outcomes</div>
        </Link>
        <Link to="/SEI" className={location.pathname === '/SEI' ? activeMenuItemClass : ''}>
          <div className="nav-items">SEI</div>
        </Link>
        <Link to="/channel" className={location.pathname === '/channel' ? activeMenuItemClass : ''}>
          <div className="nav-items">Online Communities</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
