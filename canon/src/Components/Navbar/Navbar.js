import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMobileMenuOpen]);

  return (
    <div>
      {/* Top Bar */}
      <div className="navbar-topbar">
        <div className="navbar-topbar-left">
          <span className="navbar-topbar-link active">Consumer</span>
          <span className="navbar-topbar-link">Pro</span>
          <span className="navbar-topbar-link">Business</span>
        </div>
        <div className="navbar-topbar-right">
          <span className="navbar-topbar-feedback">[+] Feedback</span>
          <span className="navbar-topbar-divider" />
          <span className="navbar-topbar-cart" role="img" aria-label="cart">🛒</span>
          <span className="navbar-topbar-divider" />
          <span className="navbar-topbar-user" role="img" aria-label="user">👤 Sign In</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar">
        <div className="navbar-logo">
          <img src="/images/canon-logo-red.svg" alt="Canon Logo"/>
        </div>
        <div className="navbar-search">
          <span className="search-icon" role="img" aria-label="search">🔍</span>
          <input className="search-input" type="text" placeholder="Search products, support and more" />
        </div>
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={closeMobileMenu}></div>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-close" onClick={closeMobileMenu}>✕</span>
        </div>
        <div className="mobile-menu-content">
          <div className="mobile-menu-section">
            <h3>Products</h3>
            <Link to="#" className="mobile-menu-link" onClick={closeMobileMenu}>Cameras</Link>
            <Link to="#" className="mobile-menu-link" onClick={closeMobileMenu}>Lenses</Link>
            <Link to="#" className="mobile-menu-link" onClick={closeMobileMenu}>Video</Link>
            <Link to="#" className="mobile-menu-link" onClick={closeMobileMenu}>Printers</Link>
            <Link to="#" className="mobile-menu-link" onClick={closeMobileMenu}>Ink, Toner & Paper</Link>
            <Link to="#" className="mobile-menu-link" onClick={closeMobileMenu}>Office</Link>
            <Link to="#" className="mobile-menu-link" onClick={closeMobileMenu}>Deals</Link>
            <Link to="#" className="mobile-menu-link" onClick={closeMobileMenu}>Protect Your Product</Link>
          </div>
          <div className="mobile-menu-section">
            <h3>Support & Resources</h3>
            <Link to="#" className="mobile-menu-link" onClick={closeMobileMenu}>Learning</Link>
            <Link to="#" className="mobile-menu-link" onClick={closeMobileMenu}>Community</Link>
            <Link to="#" className="mobile-menu-link" onClick={closeMobileMenu}>Support</Link>
            <Link to="#" className="mobile-menu-link" onClick={closeMobileMenu}>Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="navbar-links desktop-only">
        <Link to="#" className="navbar-link">Cameras</Link>
        <Link to="#" className="navbar-link">Lenses</Link>
        <Link to="#" className="navbar-link">Video</Link>
        <Link to="#" className="navbar-link">Printers</Link>
        <Link to="#" className="navbar-link">Ink, Toner & Paper</Link>
        <Link to="#" className="navbar-link">Office</Link>
        <Link to="#" className="navbar-link">Deals</Link>
        <Link to="#" className="navbar-link">Protect Your Product</Link>
        <span className="navbar-divider">| </span>
        <Link to="#" className="navbar-link-secondary">Learning</Link>
        <Link to="#" className="navbar-link-secondary">Community</Link>
        <Link to="#" className="navbar-link-secondary">Support</Link>
        <Link to="#" className="navbar-link-secondary">Contact Us</Link>
      </div>

      {/* Banner */}
      <div className="navbar-banner">
        <h1>FREE STANDARD SHIPPING ON CAMERAS & LENSES</h1>
      </div>
    </div>
  )
}

export default Navbar