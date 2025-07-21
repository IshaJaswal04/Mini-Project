import React from 'react';
import styles from './index.module.scss';
import { FaCoins, FaTools, FaHeadset } from 'react-icons/fa';

const features = [
  {
    icon: <FaCoins size={40} color="#3b82f6" />,
    title: 'High Commission Rates',
    description: 'Payouts range from $5 to $15 per sale. With our high-converting chat assistant, you could earn thousands per month!',
    highlight: '$15',
    subtext: 'Max Commission',
  },
  {
    icon: <FaTools size={40} color="#3b82f6" />,
    title: 'Premium Marketing Tools',
    description: 'Connect your visitors with experts like doctors, lawyers, mechanics, and more. Tailor categories to match your audience.',
    highlight: 'Customized',
    subtext: 'Marketing Assets',
  },
  {
    icon: <FaHeadset size={40} color="#3b82f6" />,
    title: 'Dedicated Support',
    description: 'Help your visitors solve problems quickly and affordably. They’ll save time & money over in-person services—and love you for it!',
    highlight: '24/7',
    subtext: 'Support Available',
  },
];

function WhyChoose() {
  return (
    <section className={styles.whyChooseSection}>
      <h2 className={styles.heading}>Why Partner with <span className={styles.brand}>KaeeraVentures</span>?</h2>
      <p className={styles.subheading}>Everything you need to succeed as our partner</p>
      <div className={styles.featuresGrid}>
        {features.map((feature, idx) => (
          <div className={styles.featureCard} key={idx}>
            <div className={styles.iconWrapper}>{feature.icon}</div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDesc}>{feature.description}</p>
            <div className={styles.featureHighlight}>{feature.highlight}</div>
            <div className={styles.featureSubtext}>{feature.subtext}</div>
          </div>
        ))}
      </div>
      <div className={styles.ctaSection}>
        <h3 className={styles.ctaHeading}>Ready to Start Earning?</h3>
        <p className={styles.ctaSubtext}>Join thousands of successful partners who are already earning with us</p>
        <div className={styles.ctaButtons}>
          <button className={styles.applyBtn}>Apply Now</button>
          <button className={styles.commissionBtn}>View Commission Structure</button>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;