import React from "react";
import "./Footer.css";
import Logo from "../assets/sodlogo.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Phone from "../assets/phone.png";
import Email from "../assets/email.png";
import Youtube from "../assets/youtube.png";
import FormLogo from "../assets/form.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section company-info">
        <h3 className="">Contact</h3>
        <p>
          <img src={Phone} className="footerLogos" alt="phone"/>
          <a href="tel:8065771510">806-577-1510</a>
        </p>
        <p>
          <img src={Email} className="footerLogos" alt="email"/>
          <a href="mailto:colby@doubletsod.com">colby@doubletsod.com</a>
        </p>
        <p>
          <img src={FormLogo} className="footerLogos" alt="form"/>
          <a href="/contact">contact form</a>
        </p>
      </div>
      <div className="footer-middle-row">
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/products">Sod Types</Link>
            </li>
            <li>
              <Link to="/past-installations">Past Installations</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section social-media">
          <div className="social-media-connections">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/share/19GXABBdjo/?mibextid=wwXIfr">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/doublet_sod/?hl=en">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="https://www.youtube.com/@doubletsodandinstallation6346">
                <img src={Youtube} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="legal-text">
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
        </p>
        <p>© 2025 [Double T-SOD]. All Rights Reserved.</p>
        <a
          href="https://weareasite.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Made By: We Are A Site LLC</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
