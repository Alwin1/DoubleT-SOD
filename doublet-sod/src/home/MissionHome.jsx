import React from "react";
import MissionStatement from "../assets/mission-statement.jpg";
import "./MissionHome.css";
import ArrowCircle from "../assets/arrow-circle.png";

const MissionHome = () => {
  return (
    <div className="missionHomeContainer">
      <div className="missionTitleContainer">
        <h2 className="missionTitle">
          <span>
            Quality Sod, Expert Service, and a Greener Future for Your Lawn
          </span>
          <br />serving West Texas and Eastern New Mexico since 2014
        </h2>
        <p className="missionParagraph">
          Since 2014, Double T Sod has been committed to providing top-quality
          sod and exceptional service to homeowners and businesses across West
          Texas and Eastern New Mexico. As a family-owned and operated company,
          we take pride in treating every customer like family. Our dedication
          to quality and reliability has made us a go-to provider for sod
          delivery and installation, helping countless customers achieve lush,
          beautiful landscapes.
        </p>
      </div>
      <div className="missionPictureContainer">
        <div className="missionStatementContainer">
          <h2 className="missionTitle"><span>Our Mission</span></h2>
          <p className="missionParagraph">
            Our mission is to make it easy, affordable, and hassle-free to get
            the best sod for your property. Whether you’re installing a new
            lawn, revamping your backyard, or upgrading a commercial space, we
            provide high-quality sod, expert installation, and reliable service
            every step of the way.
          </p>
          <button className="learnMoreButton">
            <p>Learn More</p>
            <img src={ArrowCircle} />
          </button>
        </div>
        <img src={MissionStatement} className="missionPicture" />
      </div>
    </div>
  );
};

export default MissionHome;
