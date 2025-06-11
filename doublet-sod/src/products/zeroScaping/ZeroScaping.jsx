import './ZeroScaping.css';
import Header from '../../overlays/Header';
import ZeroScapingFooter from './ZeroScapingFooter';
import ZeroScapingText from './ZeroScapingText';
import { useEffect } from "react";
import SEO from '../../overlays/SEO';

function ZeroScaping() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className='zeroScapingPageContainer'>
      <SEO
        title="ZeroScaping | Double T-Sod"
        description="Learn more about zero-scaping which is offered by Double T-Sod. For home owners that want to reduce upkeep and water usage."
        keywords="bermuda sod, grass installation, texas landscaping, products, bermuda, zero-scaping, xeri-scaping, fescue, tifway, celebration, frontier, family-oriented, businesses, cost-effective, New Mexico"
        url="https://doubletsod.com/products/zero-scaping"
      />
        <Header />
        <ZeroScapingText />
        <ZeroScapingFooter />
      </div>
    </>
  )
}

export default ZeroScaping;
