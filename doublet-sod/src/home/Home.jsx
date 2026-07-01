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
import Banner from "./Banner";

function Home() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="homeContainer">
      <SEO
        title="Double T-Sod: Trusted Artificial Turf & Sod Installation Experts"
        description="Homepage of DoubleT-Sod. Offering high-quality different sod installation services for homes and businesses across Texas and New Mexico Regions."
        keywords="artificial turf, Artificial Turf Installation in Lubbock, Synthetic Grass Installation, Turf Installers in West Texas, Artificial Grass for Homes, Pet Turf Installation, Backyard Turf Installation, bermuda sod, grass installation, texas landscaping, products, bermuda, zero-scaping, xeri-scaping, fescue, tifway, celebration, frontier, family-oriented, businesses, cost-effective, New Mexico"
        url="https://doubletsod.com/"
      />
      <Header />
      <Banner />
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
