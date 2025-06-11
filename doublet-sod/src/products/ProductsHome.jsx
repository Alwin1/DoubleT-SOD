import './ProductsHome.css'
import Footer from '../overlays/Footer'
import Header from '../overlays/Header'
import MainTypes from './MainTypes'
import { useEffect } from "react";
import SEO from '../overlays/SEO';

function ProductsHome() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className='productsContainer'>
      <SEO
        title="Products | Double T-Sod"
        description="Find all the product offerings from Double T - Sod. We offer different sod types, Tifway 419 Bermuda, Celebration Bermuda, Frontier Fescue as well as zero-scaping."
        keywords="bermuda sod, grass installation, texas landscaping, products, bermuda, zero-scaping, xeri-scaping, fescue, tifway, celebration, frontier, family-oriented, businesses, cost-effective, New Mexico"
        url="https://doubletsod.com/products"
      />
        <Header />
        <MainTypes />
        <Footer />
      </div>
    </>
  )
}

export default ProductsHome
