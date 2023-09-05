import { NavLink } from "react-router-dom";
import footerLogo from "../../images/Logo .svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <img src={footerLogo} alt="footer logo" />
        <p className="company-description">
          A family owned Mediterranean restaurant focusedon traditional recipes
          served with a modern twist.{" "}
        </p>
      </div>
      <div className="footer-content">
        <h4>Social Media</h4>
        <NavLink to="#">
          <box-icon type="logo" name="facebook"></box-icon>
        </NavLink>
        <NavLink to="#">
          <box-icon type="logo" name="linkedin"></box-icon>
        </NavLink>
        <NavLink>
          <box-icon name="instagram-alt" type="logo"></box-icon>
        </NavLink>
      </div>
      <div className="footer-content">
        <h4>Contact Us</h4>
        <div className="contact-info">
          <box-icon type="solid" name="phone"></box-icon> <p>999-999-99999</p>
        </div>
        <div className="contact-info">
          <box-icon name="envelope"></box-icon> <p>contact@littlelemon.com</p>
        </div>
      </div>
      <div className="footer-content">
        <h4>Site Links</h4>
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/reservations">Reservations</NavLink>
          <NavLink to="/order">Order online</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
