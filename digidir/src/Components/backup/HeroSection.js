import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div
        className="hero-section-bg"
        style={{
          background: `url(${process.env.PUBLIC_URL}/image/financial-questions-couple-are-in-the-office-getting-consulted-by-a-manager.jpg) center/cover no-repeat`
        }}
      ></div>
      <div className="hero-section-overlay"></div>
      <div className="hero-section-content">
        <span className="hero-tagline">SERVICE AT YOUR DOOR STEP</span>
        <h1 className="hero-title">Lets Starts Digidir</h1>
        <p className="hero-description">
          Digidir is a digital marketing agency offering expert services in SEO, Google Ads, Email Marketing, and Data Recovery. We help businesses grow online visibility, drive leads, and recover critical data.
        </p>
        <div className="hero-buttons">
          <button className="hero-btn primary">Talk With Us</button>
          <button className="hero-btn secondary">Learn More <span className="arrow">→</span></button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 