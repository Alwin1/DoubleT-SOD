import './Gallery.css'
import Footer from '../overlays/Footer'
import Header from '../overlays/Header'
import { useEffect } from "react";
import GalleryImages from './GalleryImages';
import SEO
 from '../overlays/SEO';
function Gallery() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className='productsContainer'>
      <SEO
        title="Gallery | Double T-Sod"
        description="Look through all the past installations done by Double T-Sod."
        keywords="bermuda sod, grass installation, texas landscaping, products, bermuda, zero-scaping, xeri-scaping, fescue, tifway, celebration, frontier, family-oriented, businesses, cost-effective, New Mexico"
        url="https://doublet-sod.web.app/past-installations"
      />
        <Header />
        <GalleryImages />
        <Footer />
      </div>
    </>
  )
}

export default Gallery
