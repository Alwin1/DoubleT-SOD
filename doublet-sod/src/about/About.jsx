import './About.css'
import Footer from '../overlays/Footer'
import Header from '../overlays/Header'
import DragImage from '../home/DragImage'
import AboutDouble from './AboutDouble'
import OfferingAbout from './OfferingAbout'
import Choosing from './Choosing'
import MainTeam from "../assets/MainTeam.jpg";

function About() {

  return (
    <>
      <div className='aboutContainer'>
        <Header />
        {/* <DragImage /> */}
        <img src={MainTeam} className= "mainTeamPic" alt="Team Picture Main" />
        <AboutDouble />
        <OfferingAbout />
        <Choosing />
        <Footer />
      </div>
    </>
  )
}

export default About
