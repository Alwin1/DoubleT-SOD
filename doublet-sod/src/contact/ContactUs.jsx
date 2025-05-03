import React, { useState } from "react";
import axios from "axios";
import "./ContactUs.css";
import Phone from "../assets/phoneContact.png";
import Clock from "../assets/clockContact.png";
import Email from "../assets/emailContact.png";
import Youtube from "../assets/youtube.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import GrassFooter from "../assets/grassFooter.jpeg";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/send-contact", form);
      setSubmittedData(form); // Save submitted data
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Error sending email.");
    }
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">
        Get in touch with us today! Whether you need sod delivery, installation,
        or xeriscaping services, we’re here to help. <br />
        Contact us now for a<strong> FREE</strong> quote!
      </p>
      <div className="contact-content">
        <div>
          {submittedData ? (
            <div className="confirmation-message">
              <h3>Thank you for reaching out! We will reach out to you soon!</h3>
              <p>
                <strong>Name:</strong> {submittedData.name}
              </p>
              <p>
                <strong>Email:</strong> {submittedData.email}
              </p>
              {submittedData.phone && (
                <p>
                  <strong>Phone:</strong> {submittedData.phone}
                </p>
              )}
              <p>
                <strong>Message:</strong> {submittedData.message}
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number (Optional)"
                value={form.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="submitButton">
                Submit Now
              </button>
            </form>
          )}
        </div>
        <div className="contact-info">
          <div className="contact-top-row">
            <div className="contact-method">
              <img className="icon" src={Phone} />
              <div className="contactInformation">
                <h3>Text or Call</h3>
                <a href="tel:8065771510">806-577-1510</a>
              </div>
            </div>
            <div className="contact-method">
              <img className="icon" src={Email} />
              <div className="contactInformation">
                <h3>Email</h3>
                <a href="mailto:colby@doubletsod.com">colby@doubletsod.com</a>
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
                <img
                  src={Facebook}
                  className="socialMediaIcon"
                  alt="Facebook"
                />
              </a>
              <a href="https://www.instagram.com/doublet_sod/?hl=en">
                <img
                  src={Instagram}
                  className="socialMediaIcon instagram"
                  alt="Instagram"
                />
              </a>
              <a href="https://www.youtube.com/@doubletsodandinstallation6346">
                <img
                  src={Youtube}
                  className="socialMediaIcon"
                  alt="Instagram"
                />
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
