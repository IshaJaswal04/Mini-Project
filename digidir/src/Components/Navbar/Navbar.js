import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';


function Navbar ()  {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="image/logo-epson_420x100-300x71.png" alt="EPSON Logo" height="50">
      </div>

      <ul className="nav-links">
      <li><Link to="#">Store</Link></li>
      <li><Link to="#">Printer</Link></li>
      <li><Link to="#">Ink</Link></li>
      <li><Link to="#">Projectors</Link></li>
      <li><Link to="#">Scanners</Link></li>
      <li><Link to="#">Point of Sale</Link></li>
      <li><Link to="#">Support</Link></li>
      </ul>

      <div class="navbar-contact">
       <button>Customer Service : +1 888-774-2296</button>
      </div>
    </nav>




  );
};

export default Navbar;