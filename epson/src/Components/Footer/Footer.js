import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-col">
            <h3>Products</h3>
            <ul>
              <li>Printers</li>
              <li>Projectors</li>
              <li>Scanners</li>
              <li>Point of Sale</li>
              <li>Robots</li>
              <li>Microdevices</li>
              <li>Print Heads</li>
              <li>Ink</li>
              <li>Paper</li>
              <li>Service Plans</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Support</h3>
            <ul>
              <li>Printers</li>
              <li>Projectors</li>
              <li>Scanners</li>
              <li>Point of Sale</li>
              <li>Robots</li>
              <li>Wearables</li>
              <li>Microdevices</li>
              <li>Other Products</li>
              <li>Warranty Verification</li>
              <li>Brighter Futures Product Registration</li>
              <li>Safety Data Sheets</li>
              <li>Epson Developers Portal</li>
              <li>Security Notifications</li>
              <li>Technical Support Fraud Alert</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Shop Epson</h3>
            <ul>
              <li>Buy Direct</li>
              <li>Weekly Specials</li>
              <li>Epson Certified ReNew Program</li>
              <li>Track Your Order</li>
              <li>Register Your Product</li>
              <li>Activate Your Service Plan</li>
              <li>My Account</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Our History</li>
              <li>Executive Team</li>
              <li>Careers</li>
              <li>Epson Partner Program</li>
              <li>Shaq + Epson</li>
              <li>LPGA</li>
              <li>Epson Portland, Inc.</li>
              <li>Newsroom</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-col footer-signup">
            <h3>Stay Connected with Epson</h3>
            <form>
              <label>Email Address* (required)</label>
              <input type="email" placeholder="Enter email address" required />
              <label>Country* (required)</label>
              <select required>
                <option>United States</option>
                {/* Add more countries as needed */}
              </select>
              <div className="footer-checkbox">
                <input type="checkbox" id="promo" required />
                <label htmlFor="promo">Opt-in for promotional emails* (required)</label>
              </div>
              <p className="footer-privacy">
                By submitting my information, I agree that it will be handled in accordance with the Epson <a href="#">Privacy Policy</a>...<br/>
                See Epson <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
              </p>
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>

    <div className="footer-bottom">
      <hr />
      <div className="footer-bottom-content">
        <span>© 2025 Epson America, Inc. | </span>
        <a href="#">Terms of Use</a> |
        <a href="#"> Accessibility</a> |
        <a href="#"> CA Supply Chains Act</a> |
        <a href="#"> CA Privacy Rights</a> |
        <a href="#"> Cookie Policy</a> |
        <a href="#"> Cookie Settings</a> |
        <a href="#"> Privacy Policy</a> |
        <a href="#"> Your Privacy Choices</a>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
