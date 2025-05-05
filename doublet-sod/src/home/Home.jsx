import { useState, useEffect } from "react";
import "./Home.css";
import Footer from "../overlays/Footer";
import Header from "../overlays/Header";
import DragImage from "./DragImage";
import MissionHome from "./MissionHome";
import SodVarieties from "./SodVarieties";
import Offering from "./Offering";
import TestimonialSlider from "./Testimonial";
import Working from "./Working";
import Logo from "../assets/sodlogo.png";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="grassLoadingScreen">
          <img
            src={Logo} // replace with actual logo path
            alt="Logo"
            className="loadingLogo"
          />
          <div className="grassTile" />
        </div>
      ) : (
        <div className="homeContainer">
          <Header />
          <DragImage />
          <MissionHome />
          <SodVarieties />
          <Offering />
          <TestimonialSlider />
          <Working />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Home;
