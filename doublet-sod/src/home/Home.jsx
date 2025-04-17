import './Home.css'
import Footer from '../overlays/Footer'
import Header from '../overlays/Header'
import DragImage from './DragImage'
import MissionHome from './MissionHome'

function Home() {

  return (
    <>
      <div className='homeContainer'>
        <Header />
        <DragImage />
        <MissionHome />
        <Footer />
      </div>
    </>
  )
}

export default Home
