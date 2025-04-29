import React from "react";
import "./MainTypes.css";
import GrassFooter from "../assets/grassFooter.jpeg";
import SmallArrow from "../assets/smallArrowImage.png";
import Tifway from "../assets/tifway.jpeg";
import Celebration from "../assets/celebration.jpeg";
import Fescue from "../assets/fescue.jpeg";
import ZeroScaping from "../assets/zero-scape.png";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const MainTypes = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLearnMoreClick = (page) => {
    navigate(`/products/${page}`);
  };

  return (
    <div className="mainTypesContainer">
      <div className="mainTypesHeaderContainer">
        <h2 className="mainTypesHeader">Find Your Perfect Sod </h2>
        <p className="mainTypesParagraph">
          Delivering and installing the best quality sod around! Based in
          Lubbock, Whether you need a lush, high-traffic lawn or a
          drought-resistant option, we have the right sod for you.
        </p>
      </div>
      <div className="threeTypesContainer">
        <div className="sodType">
          <img src={Tifway} className="sodImage" alt="Tifway 419 Bermuda Sod" />
          <div className="sodTextContainer">
            <h3 className="sodHeader">Tifway 419 Bermuda</h3>
            <p className="sodParagraph">
              Dense, fine-textured Bermuda with rapid growth. Tifway 419 is
              soft, durable, quick to recover, and rich green in color
            </p>
            <button
              className="learnMoreTextButton"
              onClick={() => handleLearnMoreClick("bermuda")}
            >
              <p>Learn More</p>
              <img src={SmallArrow} alt="Arrow" />
            </button>
          </div>
        </div>
        <div className="sodType">
          <img
            src={Celebration}
            className="sodImage"
            alt="Celbration Bermuda Sod"
          />
          <div className="sodTextContainer">
            <h3 className="sodHeader">Celebration Bermuda</h3>
            <p className="sodParagraph">
              Soft, blue-green turf with exceptional durability and weather
              resistance. Low-maintenance and ideal for homes, businesses, and
              sports fields.
            </p>
            <button
              className="learnMoreTextButton"
              onClick={() => handleLearnMoreClick("bermuda")}
            >
              <p>Learn More</p>
              <img src={SmallArrow} alt="Arrow" />
            </button>
          </div>
        </div>
        <div className="sodType">
          <img src={Fescue} className="sodImage" alt="Frontier Tall Fescue" />
          <div className="sodTextContainer">
            <h3 className="sodHeader">Frontier Tall Fescue</h3>
            <p className="sodParagraph">
              Heat and drought-tolerant grass with dark green, fine blades and
              upright growth. Perfect for a variety of soils, it provides a
              dense, high-quality lawn.
            </p>
            <button
              className="learnMoreTextButton"
              onClick={() => handleLearnMoreClick("fescue")}
            >
              <p>Learn More</p>
              <img src={SmallArrow} alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
      <div className="zeroScapingContainer">
        <h2 className="mainTypesHeader">Now Offering Zero-Scaping! </h2>
        <p className="mainTypesParagraph">
          Transform your outdoor space with a clean, low-maintenance design.
          Zero-scaping eliminates the need for frequent watering and upkeep by
          using durable materials like rocks, gravel, and hardy plants
        </p>
        <img src={ZeroScaping} className="zeroScapingImage" alt="ZeroScaping" />
        <button className="learnMoreTextButton" onClick={() => handleLearnMoreClick("zero-scaping")}>
          <p>Learn More</p>
          <img src={SmallArrow} alt="Arrow" />
        </button>
        <img src={GrassFooter} className="grassFooter" />
      </div>
    </div>
  );
};

export default MainTypes;
