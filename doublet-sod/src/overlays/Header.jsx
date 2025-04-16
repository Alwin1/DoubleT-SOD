import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/sodlogo.png';
import './Header.css';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="headerContainer">
            <div className="companyContainer">
                <img className="companyLogo" src={Logo} alt="Company Logo" />
                <h1 className="companyName">Double T-SOD</h1>
            </div>

            <button className="hamburger" onClick={toggleMenu}>
                ☰
            </button>

            {/* Fullscreen Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="mobileMenuOverlay">
                    <button className="closeButton" onClick={closeMenu}>
                        ✕
                    </button>
                    <ul className="mobileNavLinks">
                        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
                        <li><Link to="/products" onClick={closeMenu}>Our Products</Link></li>
                        <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
                        <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
                    </ul>
                </div>
            )}

            {/* Desktop Nav */}
            <nav className="navBar">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/products">Our Products</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
