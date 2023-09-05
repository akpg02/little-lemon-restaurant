import { NavLink } from "react-router-dom";
import logo from "../../images/Logo .svg";
import hamburger from "../../images/hamburger.png";
import "./Nav.css";
import { useState } from "react";

function Nav() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/reservations">Reservations</NavLink>
            </li>
            <li>
              <NavLink to="/order">Order online</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={hamburger} alt="hamburger-icon" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
