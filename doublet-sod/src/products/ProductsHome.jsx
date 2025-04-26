import './ProductsHome.css'
import Footer from '../overlays/Footer'
import Header from '../overlays/Header'
import MainTypes from './MainTypes'

function ProductsHome() {

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
