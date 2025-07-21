import React from 'react';
import './BusinessValueSection.css';

const BusinessValueSection = () => {
  return (
    <section className="business-value-section">
      <div className="business-value-container">
        <div className="business-value-image">
          <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80" alt="Consulting" />
        </div>
        <div className="business-value-content">
          <div className="business-value-label">Business Value</div>
          <h2 className="business-value-title">We Has Years Of Experience In Consulting And Advisory</h2>
          <div className="business-value-cards">
            <div className="business-value-card">
              <div className="icon"><svg width="32" height="32"><circle cx="16" cy="16" r="14" stroke="#2ecc71" strokeWidth="3" fill="none" /></svg></div>
              <div>
                <h3>Best Service Works</h3>
                <p>Delivering top-quality services tailored to drive results and exceed expectations.</p>
              </div>
            </div>
            <div className="business-value-card">
              <div className="icon"><svg width="32" height="32"><rect x="6" y="6" width="20" height="20" stroke="#2ecc71" strokeWidth="3" fill="none" /></svg></div>
              <div>
                <h3>Certification Team</h3>
                <p>Certified professionals dedicated to delivering trusted and high-quality digital solutions.</p>
              </div>
            </div>
            <div className="business-value-card">
              <div className="icon"><svg width="32" height="32"><rect x="6" y="12" width="20" height="14" stroke="#2ecc71" strokeWidth="3" fill="none" /></svg></div>
              <div>
                <h3>Schedule Consulting</h3>
                <p>Schedule a consultation with our experts to unlock tailored strategies for your business growth.</p>
              </div>
            </div>
            <div className="business-value-card">
              <div className="icon"><svg width="32" height="32"><rect x="8" y="14" width="16" height="10" stroke="#2ecc71" strokeWidth="3" fill="none" /></svg></div>
              <div>
                <h3>Flexible Business Hours</h3>
                <p>We offer flexible business hours to accommodate your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessValueSection; 