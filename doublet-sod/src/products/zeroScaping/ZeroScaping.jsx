import './ZeroScaping.css';
import Header from '../../overlays/Header';
import ZeroScapingFooter from './ZeroScapingFooter';
import ZeroScapingText from './ZeroScapingText';

function ZeroScaping() {

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
