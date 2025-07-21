import React from 'react';
import styles from './ContactHero.module.scss';

const ContactHero = () => (
  <section className={styles.root}>
    <div className={styles.content}>
      <h1>Contact Us Digital Marketing Solutions</h1>
      <p>Need help with digital marketing? Reach out to Lift Digitally today! Contact us for contact us digital marketing solutions.</p>
      <button className={styles.cta}>
        <span role="img" aria-label="phone">📞</span> Talk With Our Search Marketing Experts
      </button>
    </div>
    <div className={styles.image}>
      {/* Inline SVG illustration */}
      <svg width="320" height="240" viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="60" width="280" height="160" rx="18" fill="#e3f2fd"/>
        <ellipse cx="160" cy="140" rx="60" ry="50" fill="#1565c0" fillOpacity="0.15"/>
        <circle cx="160" cy="110" r="40" fill="#fff" stroke="#1565c0" strokeWidth="4"/>
        <ellipse cx="160" cy="110" rx="22" ry="18" fill="#1565c0"/>
        <rect x="140" y="150" width="40" height="18" rx="6" fill="#1565c0"/>
        <rect x="120" y="170" width="80" height="10" rx="5" fill="#90caf9"/>
        <circle cx="180" cy="100" r="4" fill="#1565c0"/>
        <circle cx="140" cy="100" r="4" fill="#1565c0"/>
        <rect x="150" y="120" width="20" height="6" rx="3" fill="#90caf9"/>
      </svg>
    </div>
  </section>
);

export default ContactHero; 