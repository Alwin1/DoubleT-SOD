import "./About.css";
import Footer from "../overlays/Footer";
import Header from "../overlays/Header";
import AboutDouble from "./AboutDouble";
import OfferingAbout from "./OfferingAbout";
import Choosing from "./Choosing";
import MainTeam from "../assets/MainTeam.jpg";
import { useEffect, useState } from "react";

function About() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="aboutContainer">
      <Header />
      <img
        src={MainTeam}
        className="mainTeamPic"
        alt="Team Picture Main"
        onLoad={handleImageLoad}
        loading="eager"
      />
      {imageLoaded && (
        <>
          <AboutDouble />
          <OfferingAbout />
          <Choosing />
          <Footer />
        </>
      )}
    </div>
  );
}

export default About;
