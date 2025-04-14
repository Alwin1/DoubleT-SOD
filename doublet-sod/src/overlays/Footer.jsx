import React from "react";
import "./Footer.css";
import Logo from "../assets/sodlogo.png"
import Facebook from "../assets/facebook.png"
import Instagram from "../assets/instagram.png"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section company-info">
        <div className="company-logo-container">
          <img src={Logo} alt="Company Logo" className="logo" />
          <h2 className="company-name">CompanyName</h2>
        </div>
        <p>Call us: (555) 123-4567</p>
        <p>Email: info@hvaccompany.com</p>
        <p>Location: 123 Main St, Phoenix, AZ 85001</p>
      </div>

      <div className="footer-section quick-links">
        <h3>Quick Links:</h3>
        <ul>
          <li><Link to="/">- Home</Link></li>
          <li><Link to="/about">- About Us</Link></li>
          <li><Link to="/services">- Our Services</Link></li>
          <li><Link to="/finacing">- Financing Options</Link></li>
          <li><Link to="/book">- Book a Service</Link></li>
          <li><Link to="/faqs">- FAQs</Link></li>
        </ul>
      </div>
      <div className="footer-section social-media">
        <div className="social-media-connections">
          <h3>Social Media Links:</h3>
          <div className="social-icons">
            <img src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Instagram" />
          </div>
        </div>
        <div className="social-newsletter">
          <h3>Newsletter Sign-Up:</h3>
          <div className="newsletter">
            <input type="email" placeholder="example@email.com" />
            <button>Sign Up</button>
          </div>
        </div>
      </div>
      <div className="footer-section legal">
        <h3>Legal Information:</h3>
        <ul>
          <li>- Privacy Policy</li>
          <li>- Terms of Service</li>
          <li>- Site Map</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© 2025 [Your Company Name]. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
