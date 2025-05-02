import './Contact.css'
import Footer from '../overlays/Footer'
import Header from '../overlays/Header'
import { useEffect } from "react";
import ContactUs from './ContactUs';

function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className='contactContainer'>
        <Header />
        <ContactUs />
        <Footer />
      </div>
    </>
  )
}

export default Contact
