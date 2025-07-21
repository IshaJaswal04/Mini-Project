// src/Components/EpsonSupportModal.js
import React from "react";
import "./Popup.css";

const Popup = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <div className="modal-logo">EPSON<sup>®</sup></div>
        <div className="modal-support">
          <span role="img" aria-label="phone" className="phone-emoji">☎️</span>
          <span className="support-text">Need Fast Support?</span>
        </div>
        <div className="modal-desc">
          Call Us For EPSON Printer Help
        </div>
        <a href="tel:+18887742296" className="modal-call-btn">
          Call Now: +1 888-774-2296
        </a>
      </div>
    </div>
  );
};

export default Popup;