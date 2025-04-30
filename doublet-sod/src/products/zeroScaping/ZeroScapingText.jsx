import React from "react";
import "./ZeroScapingText.css";
import ZeroScaping from "../../assets/zero-scape.png";
import RocksFooter from "../../assets/rocksFooter.png"
const ZeroScapingText = () => {
  return (
    <div className="zeroScapingTextContainer">
      <h2>Zero-Scaping: Clean, Modern, and Low-Maintenance</h2>
      <div className="zeroScapingTextImage">
        <div className="zeroScapeParagraph">
          <p>
            Transform your outdoor space with the elegance and practicality of
            Zero-Scaping.​
          </p>
          <p>
            This innovative landscaping approach replaces traditional sod with a
            variety of decorative rocks, offering a low-maintenance,
            water-efficient alternative that enhances your property’s natural
            beauty.
          </p>
          <p>
            Perfect for homeowners looking to reduce upkeep and water usage, our
            Zero-Scaping is customizable to fit your style and needs.
          </p>
          <p>
            Whether you're looking to reduce upkeep, lower utility bills, or
            refresh your property with a bold new look, zero-scaping offers a
            smart, sustainable alternative. Our team can help design and install
            a layout that matches your vision, complements your home, and adds
            lasting value to your landscape.
          </p>
        </div>
        <img
          src={ZeroScaping}
          className="zeroScapingImageText"
          alt="ZeroScaping"
        />
      </div>
      <img src={RocksFooter} className="grassFooter" />
    </div>
  );
};

export default ZeroScapingText;
