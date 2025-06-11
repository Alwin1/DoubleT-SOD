import './Fescue.css';
import Header from '../../overlays/Header';
import Footer from '../../overlays/Footer'
import FescueGrass from './FescueGrass';
import { useEffect } from "react";
import SEO from '../../overlays/SEO';

function Fescue() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className='fescueContainer'>
      <SEO
        title="Bermuda | Double T-Sod"
        description="Learn more about Frontier Tall Fescue which is offered by Double T-Sod. Learn also some tips and tricks about frontier tall fescue."
        keywords="bermuda sod, grass installation, texas landscaping, products, bermuda, zero-scaping, xeri-scaping, fescue, tifway, celebration, frontier, family-oriented, businesses, cost-effective, New Mexico"
        url="https://doubletsod.com/products/fescue"
      />
        <Header />
        <FescueGrass />
        <Footer />
      </div>
    </>
  )
}

export default Fescue;
