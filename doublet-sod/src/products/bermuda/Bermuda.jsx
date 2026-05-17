import './Bermuda.css';
import Header from '../../overlays/Header';
import Footer from '../../overlays/Footer'
import BermudaGrass from './BermudaGrass';
import BarGraph from './BarGraph';
import { useEffect } from "react";
import SEO from '../../overlays/SEO';

function Bermuda() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className='bermudaContainer'>
      <SEO
        title="Bermuda | Double T-Sod"
        description="Learn more about premium bermuda grass which is offered by Double T-Sod. The two types offered are Tifway 419 and Celebration Bermuda"
        keywords="artificial turf, Artificial Turf Installation in Lubbock, Synthetic Grass Installation, Turf Installers in West Texas, Artificial Grass for Homes, Pet Turf Installation, Backyard Turf Installation, bermuda sod, grass installation, texas landscaping, products, bermuda, zero-scaping, xeri-scaping, fescue, tifway, celebration, frontier, family-oriented, businesses, cost-effective, New Mexico"
        url="https://doubletsod.com/products/bermuda"
      />
        <Header />
        <BermudaGrass />
        <BarGraph />
        <Footer />
      </div>
    </>
  )
}

export default Bermuda
