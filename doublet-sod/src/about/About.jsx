import './About.css'
import Footer from '../overlays/Footer'
import Header from '../overlays/Header'
import DragImage from '../home/DragImage'
import AboutDouble from './AboutDouble'
import OfferingAbout from './OfferingAbout'

function About() {

  return (
    <>
      <div className='aboutContainer'>
        <Header />
        <DragImage />
        <AboutDouble />
        <OfferingAbout />
        <Footer />
      </div>
    </>
  )
}

export default About
