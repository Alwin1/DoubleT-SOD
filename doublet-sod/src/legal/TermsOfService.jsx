import React, { useEffect } from "react";
import "./Legal.css";
import Header from "../overlays/Header";
import Footer from "../overlays/Footer";

function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legalContainer">
      <Header />
      <div className="legalContent">
        <h2 className="legalTitle">Terms of Service</h2>
        <p className="legalParagraph">Effective Date: 05/07/2025</p>

        <h3 className="legalSubtitle">1. Acceptance of Terms</h3>
        <p className="legalParagraph">
          By accessing and using{" "}
          <a href="https://doublet-sod.web.app/">
            https://doublet-sod.web.app/
          </a>
          , you accept and agree to be bound by the terms and provision of this
          agreement.
        </p>

        <h3 className="legalSubtitle">2. Use of the Site</h3>
        <p className="legalParagraph">
          You agree to use the Site only for lawful purposes and in a way that
          does not infringe the rights of, restrict, or inhibit anyone else's
          use and enjoyment of the Site.
        </p>

        <h3 className="legalSubtitle">3. Intellectual Property Rights</h3>
        <p className="legalParagraph">
          All content included on the Site, such as text, graphics, logos,
          images, and software, is the property of Double T Sod or its content
          suppliers and protected by applicable copyright and trademark laws.
        </p>

        <h3 className="legalSubtitle">4. User Submissions</h3>
        <p className="legalParagraph">
          Any material you send to the Site, including questions, comments,
          suggestions, or other information, will be treated as non-confidential
          and non-proprietary.
        </p>

        <h3 className="legalSubtitle">5. Limitation of Liability</h3>
        <p className="legalParagraph">
          Double T Sod shall not be liable for any damages that result from the
          use of, or the inability to use, the materials on the Site or the
          performance of the products.
        </p>

        <h3 className="legalSubtitle">6. Indemnification</h3>
        <p className="legalParagraph">
          You agree to indemnify, defend, and hold harmless Double T Sod, its
          officers, directors, employees, agents, and third parties, for any
          losses, costs, liabilities, and expenses relating to or arising out of
          your use of or inability to use the Site or services.
        </p>

        <h3 className="legalSubtitle">7. Changes to Terms</h3>
        <p className="legalParagraph">
          We reserve the right to make changes to these Terms of Service at any
          time. Your continued use of the Site will signify your acceptance of
          any adjustment to these terms.
        </p>

        <h3 className="legalSubtitle">8. Governing Law</h3>
        <p className="legalParagraph">
          These Terms shall be governed by and construed in accordance with the
          laws of the State of Texas, without regard to its conflict of law
          principles. Any disputes arising from these terms will be resolved in
          the appropriate courts located in Lubbock County, Texas.
        </p>

        <h3 className="legalSubtitle">9. Contact Information</h3>
        <p className="legalParagraph">
          For any questions about these Terms, please contact us at:
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

export default TermsOfService;
