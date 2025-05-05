import './Gallery.css'
import Footer from '../overlays/Footer'
import Header from '../overlays/Header'
import { useEffect } from "react";
import GalleryImages from './GalleryImages';

function Gallery() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className='productsContainer'>
        <Header />
        <GalleryImages />
        <Footer />
      </div>
    </>
  )
}

export default Gallery
