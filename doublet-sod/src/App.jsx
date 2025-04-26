import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import About from './about/About';
import ProductsHome from './products/ProductsHome';
import Bermuda from './products/bermuda/Bermuda';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/products' element={<ProductsHome />} />
        <Route path='/products/bermuda' element={<Bermuda />} />        
      </Routes>
    </Router>
  </StrictMode>
);
