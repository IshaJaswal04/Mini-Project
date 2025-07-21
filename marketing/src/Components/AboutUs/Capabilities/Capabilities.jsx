import React, { useState } from 'react';
import styles from './Capabilities.module.scss';

const capabilitiesData = [
  {
    number: '01',
    title: 'Tailored, Scalable Solutions',
    description: `Certified across platforms like Google and Meta, XYZ brings years of experience to deliver trusted, best-practice digital solutions.`,
  },

   {
    number: '02',
    title: 'Proven Expertise & Industry Recognition',
    description: `Certified across platforms like Google and Meta, XYZ brings years of experience to deliver trusted, best-practice digital solutions.`,
  },


  
  // Add more items as needed
];

const Capabilities = () => {
  const [current, setCurrent] = useState(0);
  const total = capabilitiesData.length;

  const prev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <div className={styles.capabilitiesWrapper}>
      <div className={styles.leftSection}>
        <h1>Why Businesses Trust XYZ for Their Digital Transformation Journey</h1>
        <p>Selecting the right digital transformation partner is a crucial decision for any organization. Here’s why XYZ stands out as a trusted provider of innovative solutions in India."</p>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.card}>
          <span className={styles.number}>{capabilitiesData[current].number}</span>
          <h2>{capabilitiesData[current].title}</h2>
          <p>{capabilitiesData[current].description}</p>
          <button className={styles.arrowLeft} onClick={prev} aria-label="Previous">
            &lt;
          </button>
          <button className={styles.arrowRight} onClick={next} aria-label="Next">
            &gt;
          </button>
        </div>
      </div>
    </div>
);
};

export default Capabilities; 