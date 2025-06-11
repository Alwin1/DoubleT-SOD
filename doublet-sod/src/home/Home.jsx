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
import SEO from "../overlays/SEO";

function Home() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="homeContainer">
      <SEO
        title="Home | Double T-Sod"
        description="Homepage of DoubleT-Sod. Offering high-quality different sod installation services for homes and businesses across Texas and New Mexico Regions."
        keywords="bermuda sod, grass installation, texas landscaping, products, bermuda, zero-scaping, xeri-scaping, fescue, tifway, celebration, frontier, family-oriented, businesses, cost-effective, New Mexico"
        url="https://doubletsod.com/"
      />
      <Header />
      <DragImage onImagesLoaded={() => setImagesLoaded(true)} />
      {imagesLoaded && (
        <>
          <MissionHome />
          <SodVarieties />
          <Offering />
          <TestimonialSlider />
          <Working />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
