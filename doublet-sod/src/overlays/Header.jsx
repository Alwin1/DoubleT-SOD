import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/sodlogo.png';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsSubmenuOpen, setProductsSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) setProductsSubmenuOpen(false); // close submenu when closing menu
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setProductsSubmenuOpen(false);
  };

  return (
    <div className="headerContainer">
      <div className="companyContainer">
        <img className="companyLogo" src={Logo} alt="Company Logo" />
        <h1 className="companyName">Double T-SOD</h1>
      </div>

      {/* Desktop Nav */}
      <nav className="navBar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li className="dropdown">
            <span>Our Products</span>
            <ul className="dropdown-menu">
              <li><Link to="/products/bermuda">Bermuda</Link></li>
              <li><Link to="/products/bescue">Bescue</Link></li>
              <li><Link to="/products/zero-scaping">Zero-Scaping</Link></li>
            </ul>
          </li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>

      {/* Hamburger Icon (Mobile Only) */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      {/* Full Screen Mobile Menu */}
      {menuOpen && (
        <div className="mobileMenuOverlay">
          <button className="closeButton" onClick={closeMenu}>×</button>
          <ul className="mobileNavLinks">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>

            {/* Custom Expandable Submenu */}
            <li>
              <div
                className="mobileNavItemWithSubmenu"
                onClick={() => setProductsSubmenuOpen(!productsSubmenuOpen)}
              >
                <li><Link to="/products" onClick={closeMenu}><span>Our Products</span></Link></li>
                <span className="submenuToggle">{productsSubmenuOpen ? '▲' : '▼'}</span>
              </div>
              {productsSubmenuOpen && (
                <ul className="mobileSubLinks">
                  <li><Link to="/products/bermuda" onClick={closeMenu}>Bermuda</Link></li>
                  <li><Link to="/products/bescue" onClick={closeMenu}>Bescue</Link></li>
                  <li><Link to="/products/zero-scaping" onClick={closeMenu}>Zero-Scaping</Link></li>
                </ul>
              )}
            </li>

            <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
