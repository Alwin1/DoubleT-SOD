import Logo from '../assets/sodlogo.png';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="headerContainer">
            <div className="companyContainer">
                <img className="companyLogo" src={Logo} alt="Company Logo" />
                <h1 className="companyName">Double T-SOD</h1>
            </div>
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
