import React from "react";
import "./SupportLinks.css";

const SupportLinks = () => {
  return (
    <div className="recommended-section">
      <div className="recommended-links">
        <h2>Recommended Links</h2>
        <ul>
          <li><a href="#">macOS 15 Support</a></li>
          <li><a href="#">Windows 11 Support</a></li>
          <li><a href="#">Replaceable Parts</a></li>
          <li><a href="#">Ink Finder</a></li>
          <li><a href="#">Safety Data Sheets</a></li>
          <li><a href="#">Recycle Program</a></li>
        </ul>
      </div>
      <div className="recommended-images">
        <img
          src="/images/g_warranty_verification_en_440x276.png"
          alt="Warranty Verification"
        />
        <img
          src="/images/g_mobile-printing-scanning_en_440x276.png"
          alt="Mobile Printing and Scanning"
        />
      </div>
    </div>
  );
};

export default SupportLinks;