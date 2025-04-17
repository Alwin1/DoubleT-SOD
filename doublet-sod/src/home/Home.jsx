import './Home.css'
import Footer from '../overlays/Footer'
import Header from '../overlays/Header'
import DragImage from './DragImage'
import MissionHome from './MissionHome'
import SodVarieties from './SodVarieties'
import Offering from './Offering'
import TestimonialSlider from './Testimonial'
import Working from './Working'

function Home() {

  return (
    <>
      <div className='homeContainer'>
        <Header />
        <DragImage />
        <MissionHome />
        <SodVarieties />
        <Offering />
        <TestimonialSlider />
        <Working />
        <Footer />
      </div>
    </>
  )
}

export default Home
