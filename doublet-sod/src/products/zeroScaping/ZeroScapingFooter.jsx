import React from "react";
import "./ZeroScapingFooter.css";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Phone from "../../assets/phone.png";
import Email from "../../assets/email.png";
import Youtube from "../../assets/youtube.png";
import FormLogo from "../../assets/form.png";
import { Link } from "react-router-dom";

const ZeroScapingFooter = () => {
  return (
    <footer className="zeroFooter">
      <div className="zeroFooter-section zeroCompany-info">
        <h3>Contact</h3>
        <p>
          <img src={Phone} className="zeroFooterLogos" />
          <a href="tel:8065771510">806-577-1510</a>
        </p>
        <p>
          <img src={Email} className="zeroFooterLogos" />
          <a href="mailto:colby@doubletsod.com">colby@doubletsod.com</a>
        </p>
        <p>
          <img src={FormLogo} className="zeroFooterLogos" />
          <a href="/contact">contact form</a>
        </p>
      </div>
      <div className="zeroFooter-middle-row">
        <div className="zeroFooter-section zeroQuick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/products">Sod Types</Link></li>
            <li><Link to="/past-installations">Past Installations</Link></li>
          </ul>
        </div>
        <div className="zeroFooter-section zeroSocial-media">
          <div className="zeroSocial-media-connections">
            <h3>Follow Us</h3>
            <div className="zeroSocial-icons">
              <a href="https://www.facebook.com/Doubletsod/">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/doublet_sod/?hl=en">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="https://www.youtube.com/@doubletsodandinstallation6346">
                <img src={Youtube} alt="YouTube" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="zeroFooter-bottom">
        <p className="zeroLegal-text">
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
        </p>
        <p>© 2025 [Double T-SOD]. All Rights Reserved.</p>
        <a href="https://weareasite.com/" target="_blank" rel="noopener noreferrer">
          <p>Made By: We Are A Site LLC</p>
        </a>
      </div>
    </footer>
  );
};

export default ZeroScapingFooter;
