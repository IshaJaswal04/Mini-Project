import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-header">
        <span className="contact-tag">[ CONTACT US ]</span>
        <h1 className="contact-title">Let's Get In<br/>Touch</h1>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <div className="contact-icon email-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#FFA800"/><path d="M6 8L12 13L18 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="6" y="8" width="12" height="8" rx="2" stroke="white" strokeWidth="2"/></svg>
          </div>
          <div>
            <div className="contact-label">Email Address</div>
            <div className="contact-info">support@digidir.info</div>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon phone-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#FFA800"/><path d="M8 16C8 16 9.5 14.5 10.5 13.5C11.5 12.5 13 11 13 11L15 13C15 13 13.5 14.5 12.5 15.5C11.5 16.5 10 18 10 18L8 16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div>
            <div className="contact-label">Call Us :</div>
            <div className="contact-info">+1 888-563-7072 , +1 877-337-5119</div>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon address-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#FFA800"/><path d="M12 17C12 17 7 13.5 7 10C7 7.23858 9.23858 5 12 5C14.7614 5 17 7.23858 17 10C17 13.5 12 17 12 17Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="10" r="2" stroke="white" strokeWidth="2"/></svg>
          </div>
          <div>
            <div className="contact-label">Address</div>
            <div className="contact-info">A-120 , Sec-58 , Noida , 201301</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection; 