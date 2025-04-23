import './About.css'
import Footer from '../overlays/Footer'
import Header from '../overlays/Header'
import DragImage from '../home/DragImage'
import AboutDouble from './AboutDouble'

function About() {

  return (
    <>
      <div className='aboutContainer'>
        <Header />
        <DragImage />
        <AboutDouble />
        <Footer />
      </div>
    </>
  )
}

export default About
