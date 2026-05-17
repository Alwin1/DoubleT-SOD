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
        keywords="artificial turf, Artificial Turf Installation in Lubbock, Synthetic Grass Installation, Turf Installers in West Texas, Artificial Grass for Homes, Pet Turf Installation, Backyard Turf Installation, bermuda sod, grass installation, texas landscaping, products, bermuda, zero-scaping, xeri-scaping, fescue, tifway, celebration, frontier, family-oriented, businesses, cost-effective, New Mexico"
        url="https://doubletsod.com/products/artificial-turf"
      />
        <Header />
        <ArtificialTurfPage />
        <Footer />
      </div>
    </>
  )
}

export default ArtificialTurf;
