 import React from 'react';
import './TransparencyServiceSection.css';

const TransparencyServiceSection = () => {
  return (
    <section className="transparency-section">
      <div className="transparency-section__content">
        <div className="transparency-section__left">
          <div className="transparency-section__label-row">
            <span className="transparency-section__label-underline"></span>
            <span className="transparency-section__label">TRANSPARENCY SERVICE</span>
          </div>
          <h2 className="transparency-section__heading">
            We Believe In Transparency In All Aspects Of Our Consulting And Advisory
          </h2>
          <p className="transparency-section__description">
            We believe in complete transparency across all aspects of our consulting and advisory services. Our clients stay informed, involved, and confident every step of the way. We provide clear communication, honest insights, and data-backed recommendations. Trust and openness are at the core of every partnership we build.
          </p>
        </div>
        <div className="transparency-section__right">
          <blockquote className="transparency-section__quote">
            <span className="transparency-section__quote-bar"></span>
            <span className="transparency-section__quote-text">
              “ We prioritize transparency to build trust and deliver honest, effective solutions. “
            </span>
          </blockquote>
          <div className="transparency-section__images">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" alt="Consulting meeting" className="transparency-section__image" />
            <img src="/image/business-consultant-and-financial-planning-business-financial-planning-analysis-consulting-concept--r4oe8unu1ozoqu25848tojnqnq9zx4mrsh65cairsw.jpg" alt="Happy client on video call" className="transparency-section__image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencyServiceSection;
