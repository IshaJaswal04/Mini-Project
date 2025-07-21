import React from 'react';
import styles from './CTA.module.scss';

const CTA = () => (
  <div className={styles.ctaContainer}>
    <div className={styles.overlay}>
      <h2 className={styles.title}>
        Want to upgrade your business with the best digital transformation solutions?
      </h2>
      <button className={styles.ctaButton}>Contact Now</button>
    </div>
  </div>
);

export default CTA; 