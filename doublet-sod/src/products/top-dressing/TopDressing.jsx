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
        keywords="bermuda sod, top-dressing, sand leveling, precision lawn care, soil, grass installation, texas landscaping, products, bermuda, zero-scaping, xeri-scaping, fescue, tifway, celebration, frontier, family-oriented, businesses, cost-effective, New Mexico"
        url="https://doubletsod.com/products/fescue"
      />
        <Header />
        <TopDressingSand />
        <Footer />
      </div>
    </>
  )
}

export default TopDressing;
