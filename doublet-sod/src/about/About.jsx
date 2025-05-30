import "./About.css";
import Footer from "../overlays/Footer";
import Header from "../overlays/Header";
import AboutDouble from "./AboutDouble";
import OfferingAbout from "./OfferingAbout";
import Choosing from "./Choosing";
import MainTeam from "../assets/MainTeam.jpg";
import { useEffect, useState } from "react";
import SEO from "../overlays/SEO";

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
      <SEO
        title="About | Double T-Sod "
        description="Meet the professionals and learn more about DoubleT-Sod and its offerings."
        keywords="bermuda sod, grass installation, texas landscaping, products, bermuda, zero-scaping, xeri-scaping, fescue, tifway, celebration, frontier, family-oriented, businesses, cost-effective, New Mexico"
        url="https://doublet-sod.web.app/about-us"
      />
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
