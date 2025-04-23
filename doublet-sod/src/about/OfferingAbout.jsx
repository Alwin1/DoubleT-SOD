import React from "react";
import "./OfferingAbout.css";
import TinyGrass from "../assets/tiny_grass.png";

const OfferingAbout = () => {
  const offerings = [
    {
      title: "Premium Sod",
      description:
        "Hand-selected from trusted local farms for a strong, healthy lawn.",
    },
    {
      title: "Competitive Pricing",
      description:
        "Thanks to strong partnerships with local sod farms, we offer top-tier quality at affordable prices.",
    },
    {
      title: "Convenient Delivery",
      description:
        "We deliver directly to homes and businesses in Lubbock, Amarillo, Midland, Odessa, and surrounding areas.",
    },
    {
      title: "Expert Installation",
      description:
        "Our team ensures proper installation for optimal growth and longevity.",
    },
  ];
  return (
    <div className="offeringAboutContainer">
      <h2 className="offerAboutHeading">What We Offer</h2>
      <div className="offerAboutFlex">
        {offerings.map((item, index) => (
          <div key={index} className="offerAboutItem">
            <div className="offerAboutTitle">
              <span>{item.title}</span>
            </div>
            <div className="offerAboutParagraph">
              <img src={TinyGrass} className="tinyGrass" alt="tinygrass" />
              <p className="offerAboutDescription">{item.description}</p>
              <img src={TinyGrass} className="tinyGrass" alt="tinygrass" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferingAbout;
