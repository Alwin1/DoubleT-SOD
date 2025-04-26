import './Bermuda.css';
import Header from '../../overlays/Header';
import Footer from '../../overlays/Footer'
import BermudaGrass from './BermudaGrass';

function Bermuda() {

  return (
    <>
      <div className='bermudaContainer'>
        <Header />
        <BermudaGrass />
        <Footer />
      </div>
    </>
  )
}

export default Bermuda
