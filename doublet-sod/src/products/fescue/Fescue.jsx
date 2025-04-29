import './Fescue.css';
import Header from '../../overlays/Header';
import Footer from '../../overlays/Footer'
import FescueGrass from './FescueGrass';

function Fescue() {

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
