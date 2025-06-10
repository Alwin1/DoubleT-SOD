import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import About from './about/About';
import ProductsHome from './products/ProductsHome';
import Bermuda from './products/bermuda/Bermuda';
import Fescue from './products/fescue/Fescue';
import ZeroScaping from './products/zeroScaping/ZeroScaping';
import TopDressing from './products/top-dressing/TopDressing';
import Contact from './contact/Contact';
import Gallery from './gallery/Gallery';
import PrivacyPolicy from './legal/PrivacyPolicy';
import TermsOfService from './legal/TermsOfService';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path='/products' element={<ProductsHome />} />
        <Route path='/products/bermuda' element={<Bermuda />} />        
        <Route path='/products/fescue' element={<Fescue />} />        
        <Route path='/products/zero-scaping' element={<ZeroScaping />} />        
        <Route path='/products/top-dressing-sand-leveling' element={<TopDressing />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/past-installations' element={<Gallery />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-of-service' element={<TermsOfService />} />
      </Routes>
    </Router>
  </StrictMode>
);
