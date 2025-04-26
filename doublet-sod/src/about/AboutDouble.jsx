import React from "react";
import "./AboutDouble.css";
import AboutTeam from "../assets/team.jpg";

const AboutDouble = () => {
  return (
    <div className="aboutDoubleContainer">
      <div className="aboutImage">
        <img src={AboutTeam} className="aboutTeamPic" />
      </div>
      <div className="aboutMissionContainer">
        <div className="aboutParagraphContainer">
          <h2 className="aboutUsTitle">About Us</h2>
          <p className="aboutUsParagraph">
            At Double-T Sod, we are proud to be a family-owned and operated
            business serving West Texas and Eastern New Mexico since 2014. We
            began with a simple goal: to provide homeowners and businesses with
            high-quality sod at affordable prices, paired with exceptional
            service. Over the years, we’ve grown into a trusted name in sod
            delivery and installation, helping countless customers create
            beautiful, healthy lawns.
          </p>
        </div>
        <div className="ourMissionParagraphContainer">
          <h2 className="ourMissionTitle">Our Mission</h2>
          <p className="ourMissionParagraph">
            Our mission is to make the process of purchasing and installing sod
            as seamless and cost-effective as possible. Whether you’re revamping
            your backyard, installing a new lawn, or upgrading your commercial
            property, Double-T Sod is here to help you achieve a lush, vibrant
            landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutDouble;
