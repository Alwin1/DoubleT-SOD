import './TopDressing.css';
import Header from '../../overlays/Header';
import Footer from '../../overlays/Footer'
import TopDressingSand from './TopDressingSand';
import { useEffect } from "react";
import SEO from '../../overlays/SEO';

function TopDressing() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className='dressingContainer'>
      <SEO
        title="Top-Dressing & Sand Leveling | Double T-Sod"
        description="Learn more about Frontier Tall Fescue which is offered by Double T-Sod. Learn also some tips and tricks about frontier tall fescue."
        keywords="artificial turf, Artificial Turf Installation in Lubbock, Synthetic Grass Installation, Turf Installers in West Texas, Artificial Grass for Homes, Pet Turf Installation, Backyard Turf Installation, bermuda sod, grass installation, texas landscaping, products, bermuda, zero-scaping, xeri-scaping, fescue, tifway, celebration, frontier, family-oriented, businesses, cost-effective, New Mexico"
        url="https://doubletsod.com/products/top-dressing-sand-leveling"
      />
        <Header />
        <TopDressingSand />
        <Footer />
      </div>
    </>
  )
}

export default TopDressing;
