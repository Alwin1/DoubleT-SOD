import './Bermuda.css';
import Header from '../../overlays/Header';
import Footer from '../../overlays/Footer'
import BermudaGrass from './BermudaGrass';
import BarGraph from './BarGraph';
import { useEffect } from "react";

function Bermuda() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className='bermudaContainer'>
        <Header />
        <BermudaGrass />
        <BarGraph />
        <Footer />
      </div>
    </>
  )
}

export default Bermuda
