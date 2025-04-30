import './Fescue.css';
import Header from '../../overlays/Header';
import Footer from '../../overlays/Footer'
import FescueGrass from './FescueGrass';
import { useEffect } from "react";

function Fescue() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className='fescueContainer'>
        <Header />
        <FescueGrass />
        <Footer />
      </div>
    </>
  )
}

export default Fescue;
