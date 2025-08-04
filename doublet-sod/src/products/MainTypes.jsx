import React from "react";
import "./MainTypes.css";
import GrassFooter from "../assets/grassFooter.jpeg";
import SmallArrow from "../assets/smallArrowImage.png";
import Tifway from "../assets/tifway.jpeg";
import Celebration from "../assets/celebration.jpeg";
import Fescue from "../assets/fescue.jpeg";
import ZeroScaping from "../assets/zero-scape.png";
import TopDressingImage from "../assets/topDressing.jpg";
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
          <img
            src={Tifway}
            className="sodImage"
            alt="Tifway 419 Bermuda Sod"
            loading="eager"
          />
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
            loading="eager"
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
          <img
            src={Fescue}
            className="sodImage"
            alt="Frontier Tall Fescue"
            loading="eager"
          />
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
        <div className="sodType">
          <img
            src={TopDressingImage}
            className="sodImage"
            alt="Top Dressing & Sand Leveling"
            loading="eager"
          />
          <div className="sodTextContainer">
            <h3 className="sodHeader">Top Dressing and Sand Leveling</h3>
            <p className="sodParagraph">
              Improve lawn health and appearance by enhancing soil quality,
              smoothing uneven surfaces, and promoting stronger grass growth.
            </p>
            <button
              className="learnMoreTextButton"
              onClick={() => handleLearnMoreClick("top-dressing-sand-leveling")}
            >
              <p>Learn More</p>
              <img src={SmallArrow} alt="Arrow" />
            </button>
          </div>
        </div>
        <div className="sodType">
          <img
            src={ZeroScaping}
            className="sodImage"
            alt="ZeroScaping"
            loading="eager"
          />
          <div className="sodTextContainer">
            <h3 className="sodHeader">Zero-Scaping</h3>
            <p className="sodParagraph">
              Eliminates the need for frequent watering and upkeep by using
              durable materials like rocks, gravel, and hardy plants
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
      <img src={GrassFooter} className="grassFooter" alt="Grass Footer Image"/>
    </div>
  );
};

export default MainTypes;
