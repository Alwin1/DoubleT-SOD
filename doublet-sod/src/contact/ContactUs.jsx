import React from "react";
import "./ContactUs.css";
import Phone from "../assets/phoneContact.png";
import Clock from "../assets/clockContact.png";
import Email from "../assets/emailContact.png";
import Youtube from "../assets/youtube.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import GrassFooter from "../assets/grassFooter.jpeg";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">
        Get in touch with us today! Whether you need sod delivery, installation,
        or xeriscaping services, we’re here to help. <br />
        Contact us now for a<strong> FREE</strong> quote!
      </p>
      <div className="contact-content">
        <form className="contact-form">
          <input type="text"  placeholder="Full Name" required/>
          <input type="email" placeholder="Email Address" required/>
          <input type="text" placeholder="Phone Number (Optional)"/>
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit" className="submitButton">Submit Now</button>
        </form>
        <div className="contact-info">
          <div className="contact-top-row">
            <div className="contact-method">
              <img className="icon" src={Phone} />
              <div className="contactInformation">
                <h3>Text or Call</h3>
                <p>806-577-1510</p>
              </div>
            </div>
            <div className="contact-method">
              <img className="icon" src={Email} />
              <div className="contactInformation">
                <h3>Email</h3>
                <p>colby@doubletsod.com</p>
              </div>
            </div>
          </div>

          <div className="hours">
            <img className="icon" src={Clock} />
            <div className="contactInformation">
              <h3>Hours of Operation</h3>
              <ul>
                <li>
                  <strong>Monday:</strong> 8:00 AM - 5:00 PM
                </li>
                <li>
                  <strong>Tuesday:</strong> 8:00 AM - 5:00 PM
                </li>
                <li>
                  <strong>Wednesday:</strong> 8:00 AM - 5:00 PM
                </li>
                <li>
                  <strong>Thursday:</strong> 8:00 AM - 5:00 PM
                </li>
                <li>
                  <strong>Friday:</strong> 8:00 AM - 5:00 PM
                </li>
                <li>
                  <strong>Saturday & Sunday:</strong> CLOSED
                </li>
              </ul>
            </div>
          </div>

          <div className="social-media-contact">
            <h3>Follow Us</h3>
            <div className="socialMediaIcons">
              <a href="https://www.facebook.com/Doubletsod/">
                <img src={Facebook} className ="socialMediaIcon" alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/doublet_sod/?hl=en">
                <img src={Instagram} className ="socialMediaIcon instagram" alt="Instagram" />
              </a>
              <a href="https://www.youtube.com/@doubletsodandinstallation6346">
                <img src={Youtube} className ="socialMediaIcon" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src={GrassFooter} className="grassFooter" />
    </div>
  );
};

export default ContactUs;
