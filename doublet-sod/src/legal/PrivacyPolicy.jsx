import React, { useEffect } from "react";
import "./Legal.css";
import Header from "../overlays/Header";
import Footer from "../overlays/Footer";

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legalContainer">
      <Header />
      <div className="legalContent">
        <h2 className="legalTitle">Privacy Policy</h2>
        <p className="legalParagraph">Effective Date: 05/07/2025</p>
        <h3 className="legalSubtitle">1. Introduction</h3>
        <p className="legalParagraph">
          Double T Sod ("Company," "we," "us," or "our") is committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our
          website{" "}
          <a href="https://doublet-sod.web.app/">
            https://doublet-sod.web.app/
          </a>
          . This policy complies with applicable state laws, including the Texas
          Data Privacy and Security Act (TDPSA). Please read this policy
          carefully.
        </p>
        <h3 className="legalSubtitle">2. Information We Collect</h3>
        <p className="legalParagraph">
          We may collect information about you in a variety of ways. The
          information we may collect on the Site includes:
        </p>
        <ul className="legalList">
          <li>
            <strong>Personal Data:</strong> Personally identifiable information,
            such as your name, shipping address, email address, and telephone
            number, that you voluntarily give to us when you fill out our
            contact form or otherwise interact with the Site.
          </li>
          <li>
            <strong>Derivative Data:</strong> Information our servers
            automatically collect when you access the Site, such as your IP
            address, browser type, operating system, access times, and pages
            viewed directly before and after accessing the Site.
          </li>
        </ul>
        <h3 className="legalSubtitle">3. Use of Your Information</h3>
        <p className="legalParagraph">We use the information we collect to:</p>
        <ul className="legalList">
          <li>Respond to your inquiries and fulfill your requests.</li>
          <li>Provide, operate, and maintain our website.</li>
          <li>Improve, personalize, and expand our website.</li>
          <li>Understand and analyze how you use our website.</li>
          <li>Develop new products, services, features, and functionality.</li>
          <li>
            Communicate with you, either directly or through one of our
            partners, including for customer service and marketing purposes.
          </li>
        </ul>
        <h3 className="legalSubtitle">4. Disclosure of Your Information</h3>
        <ul className="legalList">
          <li>
            <strong>By Law or to Protect Rights:</strong> If we believe the
            release of information about you is necessary to respond to legal
            process, to investigate or remedy potential violations of our
            policies, or to protect the rights, property, and safety of others.
          </li>
          <li>
            <strong>Third-Party Service Providers:</strong> We may share your
            information with third parties that perform services for us or on
            our behalf, such as payment processing, data analysis, email
            delivery, hosting services, customer service, and marketing
            assistance.
          </li>
        </ul>
        <h3 className="legalSubtitle">5. Security of Your Information</h3>
        <p className="legalParagraph">
          We use administrative, technical, and physical security measures to
          help protect your personal information. While we have taken reasonable
          steps to secure the personal information you provide to us, please be
          aware that no security measures are perfect or impenetrable.
        </p>
        <h3 className="legalSubtitle">
          6. Your Privacy Rights (Texas Residents)
        </h3>
        <p className="legalParagraph">
          Under the Texas Data Privacy and Security Act (TDPSA), you have the
          right to:
        </p>
        <ul className="legalList">
          <li>Know what personal information we collect about you.</li>
          <li>Request access to and a copy of your personal data.</li>
          <li>Request correction or deletion of your personal data.</li>
          <li>
            Opt out of the sale of personal data or use for targeted
            advertising.
          </li>
        </ul>
        <p className="legalParagraph">
          To exercise these rights, contact us at{" "}
          <a href="mailto:colby@doubletsod.com">colby@doubletsod.com</a> or call
          us at <a href="tel:8065771510">806-577-1510</a>.
        </p>
        <h3 className="legalSubtitle">
          7. Do Not Sell or Share My Personal Information
        </h3>
        <p className="legalParagraph">
          Double T Sod does not sell or share your personal information with
          third parties for monetary value or targeted advertising. If this
          policy ever changes, we will provide notice and allow you to opt out.
        </p>
        <h3 className="legalSubtitle">8. Policy for Children</h3>
        <p className="legalParagraph">
          We do not knowingly solicit information from or market to children
          under the age of 13. If we learn that we have collected personal
          information from a child under age 13 without verification of parental
          consent, we will delete that information.
        </p>
        <h3 className="legalSubtitle">9. Changes to This Privacy Policy</h3>
        <p className="legalParagraph">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated "Effective Date."
        </p>
        <h3 className="legalSubtitle">10. Contact Us</h3>
        <p className="legalParagraph">
          If you have questions or comments about this Privacy Policy, please
          contact us at:
        </p>
        <p className="legalParagraph">
          Double T Sod
          <br />
          <a href="tel:8065771510">806-577-1510</a>
          <br />
          <a href="mailto:colby@doubletsod.com">colby@doubletsod.com</a>
          <br />
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
