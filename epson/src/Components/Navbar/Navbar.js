import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-topbar">
        <div className="navbar-topbar-right">
          <div className="navbar-topbar-left">
            <img src="/images/us.svg" alt="US Flag" className="navbar-flag-img" />
            <span className="navbar-country">US</span>
          </div>
          <Link to="#" className="navbar-topbar-link">About Epson</Link>
          <span className="navbar-topbar-divider">|</span>
          <Link to="#" className="navbar-topbar-link">Accessibility</Link>
          <span className="navbar-topbar-divider">|</span>
          <Link to="#" className="navbar-topbar-link">Sign In</Link>
        </div>
      </div>

      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/images/logo-epson_420x100-300x71 (1).png" alt="Epson Logo"/>
        </div>
        
        {/* Hamburger Menu */}
        <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="#" className="navbar-link">Store</Link></li>
          <li><Link to="#" className="navbar-link">Printers</Link></li>
          <li><Link to="#" className="navbar-link">Ink</Link></li>
          <li><Link to="#" className="navbar-link">Projectors</Link></li>
          <li><Link to="#" className="navbar-link">Scanners</Link></li>
          <li><Link to="#" className="navbar-link">Point of Sale</Link></li>
          <li><Link to="#" className="navbar-link">Support</Link></li>
        </ul>
        <div className="navbar-customer-service">
          <span><b>Customer Service : +1 888-774-2296</b></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;