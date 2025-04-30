import './ZeroScaping.css';
import Header from '../../overlays/Header';
import ZeroScapingFooter from './ZeroScapingFooter';
import ZeroScapingText from './ZeroScapingText';
  import { useEffect } from "react";

function ZeroScaping() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className='zeroScapingPageContainer'>
        <Header />
        <ZeroScapingText />
        <ZeroScapingFooter />
      </div>
    </>
  )
}

export default ZeroScaping;
