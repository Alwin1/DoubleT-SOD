import "./About.css";
import Footer from "../overlays/Footer";
import Header from "../overlays/Header";
import AboutDouble from "./AboutDouble";
import OfferingAbout from "./OfferingAbout";
import Choosing from "./Choosing";
import MainTeam from "../assets/MainTeam.jpg";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="aboutContainer">
        <Header />
        <img
          src={MainTeam}
          className="mainTeamPic"
          alt="Team Picture Main"
          loading="eager"
        />
        <AboutDouble />
        <OfferingAbout />
        <Choosing />
        <Footer />
      </div>
    </>
  );
}

export default About;
