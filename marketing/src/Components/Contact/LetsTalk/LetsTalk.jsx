import React from 'react';
import styles from './LetsTalk.module.scss';

const LetsTalk = () => (
  <section className={styles.section}>
    <h2>Let’s Talk!</h2>
    <p className={styles.subtitle}>We understand that every business is unique, and we’re ready to create a customized strategy just for you. Here’s how you can connect with us:</p>
    <div className={styles.root}>
      <div className={styles.card}>
        <div className={styles.icon}>
          {/* Location SVG */}
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="22" fill="#fff" stroke="#1565c0" strokeWidth="2"/>
            <path d="M24 14C19.58 14 16 17.58 16 22C16 27.25 23.09 33.39 23.39 33.65C23.58 33.81 23.79 33.89 24 33.89C24.21 33.89 24.42 33.81 24.61 33.65C24.91 33.39 32 27.25 32 22C32 17.58 28.42 14 24 14ZM24 25C22.07 25 20.5 23.43 20.5 21.5C20.5 19.57 22.07 18 24 18C25.93 18 27.5 19.57 27.5 21.5C27.5 23.43 25.93 25 24 25Z" fill="#1565c0"/>
          </svg>
        </div>
        <h3>Address</h3>
        <p>PVR Plaza, Block H, Connaught Place, New Delhi 110001</p>
      </div>
      <div className={styles.card}>
        <div className={styles.icon}>
          {/* Phone SVG */}
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="22" fill="#fff" stroke="#1565c0" strokeWidth="2"/>
            <path d="M32.5 29.5C31.5 28.5 29.5 27.5 28 28.5C27 29.5 26 30.5 24 28.5C22 26.5 23 25.5 24 24.5C25 23.5 24.5 21.5 23.5 20.5C22.5 19.5 20.5 18.5 19.5 19.5C18.5 20.5 17.5 22.5 18.5 23.5C19.5 24.5 21.5 26.5 23.5 28.5C25.5 30.5 27.5 32.5 28.5 33.5C29.5 34.5 31.5 33.5 32.5 32.5C33.5 31.5 32.5 29.5 32.5 29.5Z" fill="#1565c0"/>
          </svg>
        </div>
        <h3>Phone</h3>
        <p><a href="tel:+919711237678">+91 9711237678</a><br/><a href="tel:+918744057678">+91 8744057678</a></p>
      </div>
      <div className={styles.card}>
        <div className={styles.icon}>
          {/* Email SVG */}
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="22" fill="#fff" stroke="#1565c0" strokeWidth="2"/>
            <rect x="14" y="18" width="20" height="12" rx="3" fill="#1565c0"/>
            <path d="M14 18L24 27L34 18" stroke="#fff" strokeWidth="2"/>
          </svg>
        </div>
        <h3>Email Address</h3>
        <p><a href="mailto:info@liftdigitally.com">info@liftdigitally.com</a><br/><a href="mailto:support@liftdigitally.com">support@liftdigitally.com</a></p>
      </div>
    </div>
  </section>
);

export default LetsTalk; 