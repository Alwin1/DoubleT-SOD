import React from "react";
import "./Choosing.css";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import AboutTeam from "../assets/team2.jpg";
import GrassFooter from "../assets/grassfooter.jpeg";
import ArrowCircle from "../assets/arrow-circle.png";

const Choosing = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLearnMoreClick = () => {
    navigate("/contact"); // Programmatically navigate to the /about route
  };

  const offerings = [
    {
      title: "Family Values:",
      description:
        "As a family-owned business, we’re committed to treating our customers like part of the  family. Your satisfaction is our top priority.",
    },
    {
      title: "Local Expertise:",
      description:
        "With deep roots in West Texas and Eastern New Mexico, we understand the unique challenges of growing and maintaining lawns in our region’s climate.",
    },
    {
      title: "Reliable Service:",
      description:
        "From your first call to the final installation, we strive to make every step of the process smooth and stress-free.",
    },
  ];

  return (
    <div className="choosingContainer">
      <div className="choosingTextImageContainer">
        <div className="choosingValuesFlex">
          <h2 className="choosingValuesHeader">Why Choose Us?</h2>
          {offerings.map((item, index) => (
            <div key={index} className="choosingValuesItem">
              <div className="choosingTitle">
                <span>{item.title}</span>
              </div>
              <p className="choosingDescription">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="choosingImage">
          <img src={AboutTeam} className="choosingTeamPic" loading="lazy" />
        </div>
      </div>
      <div className="areasServedContainer">
        <h2 className="areasServedHeader">Areas We Serve</h2>
        <p className="areasServedParagraph">
          Double-T Sod proudly services the communities of Amarillo, Lubbock,
          Midland, Odessa, and the surrounding areas. Whether you’re in the
          heart of West Texas or a neighboring town, we’re here to meet your sod
          needs.
        </p>
        <div className="areasServedListContainer">
          <ul className="areasServedList">
            <li>Amarillo</li>
            <li>Midland</li>
            <li>Lubbock</li>
            <li>Odessa</li>
            <li>Carlsbad</li>
            <li>Lovington</li>
            <li>Roswell</li>
            <li>Alamogordo</li>
          </ul>
          <p>...And surrounding areas!</p>
        </div>
      </div>
      <div className="growTogetherContainer">
        <h2 className="growingTitle">Let’s Grow Together</h2>
        <p className="growingParagraph">
          Ready to transform your outdoor space? Contact Double-T Sod today to
          learn more about our products, services, and how we can help you
          achieve the lawn of your dreams.
        </p>
        <p className="growingParagraph">
          With Double-T Sod, greener pastures are just a call away!
        </p>
        <button className="freeQuoteAboutButton" onClick={handleLearnMoreClick}>
          <p>Get a Free Quote Now</p>
          <img src={ArrowCircle} />
        </button>
      </div>
      <img src={GrassFooter} className="grassFooter" />
    </div>
  );
};

export default Choosing;
