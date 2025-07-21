import React from 'react';
import styles from './Services.module.scss';

const services = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="8" fill="#6C3FC5"/><path d="M12 8a2 2 0 0 1 2 2v1h-4v-1a2 2 0 0 1 2-2Zm6 4v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1v-1a3 3 0 1 1 6 0v1h1a2 2 0 0 1 2 2Z" fill="#fff"/></svg>
    ),
    title: 'Search Engine Optimization (SEO)',
    desc: 'Improves your websites visibility on search engines like Google by optimizing content, structure, and backlinks—driving organic traffic and better rankings.',
    link: '#',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="8" fill="#6C3FC5"/><path d="M7 17v-2a4 4 0 0 1 8 0v2m-8 0h8m-8 0v2m8-2v2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'Social Media Marketing (SMM)',
    desc: 'Creates and manages campaigns across platforms like Instagram, Facebook, LinkedIn, and Twitter to build brand awareness and engage your audience.',
    link: '#',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="8" fill="#6C3FC5"/><path d="M8 17v-1a4 4 0 0 1 8 0v1m-8 0h8m-8 0v2m8-2v2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'Pay-Per-Click Advertising (PPC)',
    desc: 'Build deeply customized apps to make your digital presence more seamless, engaging, and profitable using next-gen capabilities.',
    link: '#',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="8" fill="#6C3FC5"/><path d="M12 8v8m0 0a4 4 0 1 0 0-8v8Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'Web Design & Development',
    desc: 'Builds responsive, user-friendly websites that align with your brand and support marketing goals—often integrated with SEO and CRO strategies.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="8" fill="#6C3FC5"/><path d="M12 8v8m0 0a4 4 0 1 0 0-8v8Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'Email Marketing',
    desc: 'Designs and automates email campaigns to nurture leads, promote products, and retain customers through personalized messaging..',
    link: '#',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="8" fill="#6C3FC5"/><path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'Content Marketing',
    desc: 'Develops valuable content like blogs, videos, infographics, and case studies to educate, engage, and convert your audience.',
    link: '#',
  },
];

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.title}>Smart Digital Solutions for Future-Ready Business Performance</h2>
      <p className={styles.subtitle}>
        From SEO and web development to creative designing and targeted social media ads, we leverage leading-edge digital strategies to craft tailored solutions—trusted by clients across the globe.
      </p>
      <div className={styles.servicesSubcontainer}>
        <div className={styles.row}>
          {services.slice(0, 3).map((service, idx) => (
            <div className={styles.card} key={idx}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href={service.link} className={styles.readMore}>Read More</a>
            </div>
          ))}
        </div>
        <div className={styles.row}>
          {services.slice(3, 6).map((service, idx) => (
            <div className={styles.card} key={idx}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href={service.link} className={styles.readMore}>Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 