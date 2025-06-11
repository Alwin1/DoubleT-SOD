import './Contact.css'
import Footer from '../overlays/Footer'
import Header from '../overlays/Header'
import { useEffect } from "react";
import ContactUs from './ContactUs';
import SEO from '../overlays/SEO';

function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className='contactContainer'>
      <SEO
        title="Contact Us | Double T-Sod"
        description="Contact us by either email, phone, or through the submission form on this link here."
        keywords="bermuda sod, grass installation, texas landscaping, products, bermuda, zero-scaping, xeri-scaping, fescue, tifway, celebration, frontier, family-oriented, businesses, cost-effective, New Mexico"
        url="https://doubletsod.com/contact"
      />
        <Header />
        <ContactUs />
        <Footer />
      </div>
    </>
  )
}

export default Contact
