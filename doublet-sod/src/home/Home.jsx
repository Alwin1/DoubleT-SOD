import './Home.css'
import Footer from '../overlays/Footer'
import Header from '../overlays/Header'
import DragImage from './DragImage'
import MissionHome from './MissionHome'
import SodVarieties from './SodVarieties'

function Home() {

  return (
    <>
      <div className='homeContainer'>
        <Header />
        <DragImage />
        <MissionHome />
        <SodVarieties />
        <Footer />
      </div>
    </>
  )
}

export default Home
