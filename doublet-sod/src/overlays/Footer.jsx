import React from "react";
import "./Footer.css";
import Logo from "../assets/sodlogo.png"
import Facebook from "../assets/facebook.png"
import Instagram from "../assets/instagram.png"
import Phone from "../assets/phone.png"
import Email from "../assets/email.png"
import Youtube from "../assets/youtube.png"
import FormLogo from "../assets/form.png"

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section company-info">
        <div className="company-logo-container">
          <h3 className="company-name">Contact</h3>
        </div>
        <p><img src={Phone} className="footerLogos"/> 806-577-1510</p>
        <p><img src={Email} className="footerLogos"/> colby@doubletsod.com</p>
        <p><img src={FormLogo} className="footerLogos"/> contact form</p>
      </div>

      <div className="footer-section quick-links">
        <h3>Quick Links:</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/product">Sod Types</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
        </ul>
      </div>
      <div className="footer-section social-media">
        <div className="social-media-connections">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <img src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Instagram" />
            <img src={Youtube} alt="Instagram" />
          </div>
        </div>
      </div>
      <div className="footer-section legal">
        <ul>
          <li>Copyright</li>
          <li>- Privacy Policy</li>
          <li>- Terms of Service</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© 2025 [Double T-SOD]. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
