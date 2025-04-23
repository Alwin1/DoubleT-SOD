import './About.css'
import Footer from '../overlays/Footer'
import Header from '../overlays/Header'
import DragImage from '../home/DragImage'
import AboutDouble from './AboutDouble'
import OfferingAbout from './OfferingAbout'
import Choosing from './Choosing'

function About() {

  return (
    <>
      <div className='aboutContainer'>
        <Header />
        <DragImage />
        <AboutDouble />
        <OfferingAbout />
        <Choosing />
        <Footer />
      </div>
    </>
  )
}

export default About
