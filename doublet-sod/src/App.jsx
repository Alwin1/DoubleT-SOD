import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

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

// Initialize GA4
ReactGA.initialize('G-B04LVP3FJ0');

// Component to track page views
const GAListener = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);

  return children;
};

const AppRoutes = () => (
  <GAListener>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/products" element={<ProductsHome />} />
      <Route path="/products/bermuda" element={<Bermuda />} />
      <Route path="/products/fescue" element={<Fescue />} />
      <Route path="/products/zero-scaping" element={<ZeroScaping />} />
      <Route path="/products/top-dressing-sand-leveling" element={<TopDressing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/past-installations" element={<Gallery />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
    </Routes>
  </GAListener>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <AppRoutes />
    </Router>
  </StrictMode>
);
