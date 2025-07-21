import React from 'react';
import './SocialAdsSection.css';

const adsServices = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#3ed6a6"/><path d="M32 24c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z" fill="#fff"/><path d="M24 18v12M18 24h12" stroke="#3ed6a6" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: 'Facebook Ads',
    desc: 'Maximize your reach with targeted advertising on Facebook. Our tailored campaigns drive engagement and conversion.',
    link: '#',
    dark: false,
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="24" fill="#3ed6a6"/><rect x="14" y="14" width="20" height="20" rx="6" stroke="#fff" strokeWidth="2"/><circle cx="24" cy="24" r="5" stroke="#fff" strokeWidth="2"/><circle cx="31" cy="17" r="1" fill="#fff"/></svg>
    ),
    title: 'Instagram Ads',
    desc: 'Engage users with stunning visuals and stories on Instagram. Our strategies help you build brand awareness and loyalty.',
    link: '#',
    dark: false,
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="#236d6d"/><path d="M32 24L20 31V17l12 7z" fill="#3ed6a6"/></svg>
    ),
    title: 'Youtube Ads',
    desc: 'YouTube ads help businesses reach targeted audiences through engaging video content and measurable campaign .',
    link: '#',
    dark: true,
  },
];

const SocialAdsSection = () => {
  return (
    <section className="social-ads-section">
      <div className="social-ads-header">
        <span className="social-ads-label">WHAT WE CAN DO</span>
        <h2 className="social-ads-title">Social Media ADS</h2>
      </div>
      <div className="social-ads-cards-container">
        {adsServices.map((service, idx) => (
          <div className={`social-ads-card${service.dark ? ' dark' : ''}`} key={idx}>
            <div className="social-ads-card-icon">{service.icon}</div>
            <h3 className="social-ads-card-title">{service.title}</h3>
            <p className="social-ads-card-desc">{service.desc}</p>
            <a href={service.link} className="social-ads-card-link">Learn More <span className="arrow">→</span></a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialAdsSection; 