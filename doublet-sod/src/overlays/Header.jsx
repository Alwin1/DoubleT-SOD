import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/sodlogo.png";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null); // null, 'products', etc.

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) setActiveSubmenu(null);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveSubmenu(null);
  };

  const openSubmenu = (submenu) => {
    setActiveSubmenu(submenu);
  };

  const goBack = () => {
    setActiveSubmenu(null);
  };

  return (
    <div className="headerContainer">
      <div className="companyContainer">
        <Link to="/">
          <img className="companyLogo" src={Logo} alt="Company Logo" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="navBar">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="dropdown">
            <Link to="/products">
              <span>Our Products</span>
            </Link>
            <ul className="dropdown-menu centered-dropdown">
              <li>
                <Link to="/products/bermuda">Bermuda</Link>
              </li>
              <li>
                <Link to="/products/Fescue">Fescue</Link>
              </li>
              <li>
                <Link to="/products/top-dressing-sand-leveling">Top-Dressing & Sand Leveling</Link>
              </li>
              <li>
                <Link to="/products/zero-scaping">Zero-Scaping</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/past-installations">Past Installations</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

      {menuOpen && (
        <div className="mobileMenuOverlay">
          <button className="closeButtonHeader" onClick={closeMenu}>
            ×
          </button>

          <div
            className={`mobileMenuContent ${activeSubmenu ? "closed" : "open"}`}
          >
            <ul className="mobileNavLinks">
              <li>
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" onClick={closeMenu}>
                  About Us
                </Link>
              </li>
              <li onClick={() => openSubmenu("products")}>Our Products</li>
              <li>
                <Link to="/past-installations" onClick={closeMenu}>
                  Past Installations
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div
            className={`mobileSubmenuContent ${
              activeSubmenu ? "open" : "closed"
            }`}
          >
            <button className="backButton" onClick={goBack}>
              ←
            </button>
            <ul className="mobileSubNavLinks">
              <li>
                <Link to="/products" onClick={closeMenu}>
                  Explore All Our Products
                </Link>
              </li>
              <li>
                <Link to="/products/bermuda" onClick={closeMenu}>
                  Bermuda
                </Link>
              </li>
              <li>
                <Link to="/products/fescue" onClick={closeMenu}>
                  Fescue
                </Link>
              </li>
              <li>
                <Link to="/products/top-dressing-sand-leveling" onClick={closeMenu}>
                  Top-Dressing & Sand Leveling
                </Link>
              </li>
              <li>
                <Link to="/products/zero-scaping" onClick={closeMenu}>
                  Zero-Scaping
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
