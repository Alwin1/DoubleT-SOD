import './ArtificialTurf.css';
import Header from '../../overlays/Header';
import Footer from '../../overlays/Footer'
import ArtificialTurfPage from './ArtificialTurfPage';
import { useEffect } from "react";
import SEO from '../../overlays/SEO';

function ArtificialTurf() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className='artificialContainer'>
      <SEO
        title="Artificial Turf | Double T-Sod"
        description="Learn more about Artificial Turf which is offered by Double T-Sod. Learn also some tips and tricks about frontier tall fescue."
        keywords="bermuda sod, artificial turf, top-dressing, sand leveling, precision lawn care, soil, grass installation, texas landscaping, products, bermuda, zero-scaping, xeri-scaping, fescue, tifway, celebration, frontier, family-oriented, businesses, cost-effective, New Mexico"
        url="https://doubletsod.com/products/fescue"
      />
        <Header />
        <ArtificialTurfPage />
        <Footer />
      </div>
    </>
  )
}

export default ArtificialTurf;
