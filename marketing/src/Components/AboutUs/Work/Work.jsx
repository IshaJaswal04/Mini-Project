import React from 'react';
import styles from './Work.module.scss';
import { FaChartLine, FaUserAlt, FaBrain, FaRocket, FaGlobe, FaShieldAlt } from 'react-icons/fa';

const workItems = [
  {
    icon: <FaChartLine size={40} />, // Improved Efficiency
    title: 'Improved Efficiency',
    description: (
      <>
        Manual and repetitive tasks are eliminated with automation resulting in time and cost savings.<br />
        Enhanced collaboration among different teams boosts productivity.
      </>
    ),
  },
  {
    icon: <FaUserAlt size={40} />, // Personalized Experience
    title: 'Personalized Experience',
    description: (
      <>
        Personalized customer services bring a higher engagement rate with more conversions. Faster response times and better customer service are possible with digital channels.
      </>
    ),
  },
  {
    icon: <FaBrain size={40} />, // Smart Decision-Making
    title: 'Smart Decision-Making',
    description: (
      <>
        With real-time access to data and analytics, it becomes easy to make decisions. Insights are received from customer behavior, and market trends.
      </>
    ),
  },
  {
    icon: <FaRocket size={40} />, // Competitive Advantage
    title: 'Competitive Advantage',
    description: (
      <>
        With a Digital transformation company you can simply innovate and adapt to changes quickly.<br />
        You can entice your customers with new products and services and stay competitive.
      </>
    ),
  },
  {
    icon: <FaGlobe size={40} />, // Market Expansion
    title: 'Market Expansion',
    description: (
      <>
        Engage prospects from global locations through digital channels with greater ease.<br />
        Facilitate remote work and collaboration without geographical boundaries.
      </>
    ),
  },
  {
    icon: <FaShieldAlt size={40} />, // Advanced Security
    title: 'Advanced Security',
    description: (
      <>
        Boost your business infrastructure security with digital transformation services to protect against online attacks. Improved compliance with industry regulations and standards.
      </>
    ),
  },
];

const Work = () => (
  <section className={styles.workSection}>
    <h2 className={styles.title}>How Digital Transformation Service Benefits Your Business</h2>
    <p className={styles.subtitle}>
      Leveraging digital solutions for your business brings numerous benefits as discussed.
    </p>
    <div className={styles.grid}>
      {workItems.map((item, idx) => (
        <div className={styles.card} key={idx}>
          <div className={styles.icon}>{item.icon}</div>
          <h3 className={styles.cardTitle}>{item.title}</h3>
          <p className={styles.cardDesc}>{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Work; 