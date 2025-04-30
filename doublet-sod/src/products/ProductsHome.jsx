import './ProductsHome.css'
import Footer from '../overlays/Footer'
import Header from '../overlays/Header'
import MainTypes from './MainTypes'
import { useEffect } from "react";

function ProductsHome() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className='productsContainer'>
        <Header />
        <MainTypes />
        <Footer />
      </div>
    </>
  )
}

export default ProductsHome
