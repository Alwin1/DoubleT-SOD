import './Home.css'
import Footer from '../overlays/Footer'
import Header from '../overlays/Header'
import DragImage from './DragImage'

function Home() {

  return (
    <>
      <div className='homeContainer'>
        <Header />
        <DragImage />
        <Footer />
      </div>
    </>
  )
}

export default Home
