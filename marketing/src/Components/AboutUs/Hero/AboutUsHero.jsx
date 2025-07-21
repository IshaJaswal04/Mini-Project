import React from 'react';
import styles from './AboutUsHero.module.scss';

function AboutUsHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <div className={styles.leftContent}>
          <h1>
            Accelerate Your Business Growth<br />
             with XYZ Experts
          </h1>
          <p className={styles.heroDescription}>
            Elevate your business systems with cutting-edge digital solutions. Discover premium services in India—from SEO and web development to Google Ads—that drive innovation, boost visibility, and deliver exceptional user experiences.
          </p>
          <div className={styles.badgesRow}>
            <span className={styles.badge}><span role="img" aria-label="certified">💡</span> Data-Driven Result</span>
            <span className={styles.badge}><span role="img" aria-label="tech">⚙️</span> Personalized Solutions</span>
          </div>
          <div className={styles.badgesRow}>
            <span className={styles.badge}><span role="img" aria-label="agile">🔄</span> Cutting Edge Technology</span>
            <span className={styles.badge}><span role="img" aria-label="process">🗂️</span> Strategic Content Planning</span>
          </div>
          <div>
            <button className ={styles.button}><a href ="/contact">Contact Us</a></button>
          </div>
        </div>
        <div className={styles.rightImage} />
      </div>
    </section>
  );
}

export default AboutUsHero; 