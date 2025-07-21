import React from 'react';
import './SEOSection.css';

const seoServices = [
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#2bb3b1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    ),
    title: 'On-Page Optimization',
    desc: 'Optimize your website content and structure for better visibility on search engines.',
    link: '#',
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#2bb3b1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
    ),
    title: 'Keyword Research',
    desc: 'Discover high-performing keywords to attract your ideal customers',
    link: '#',
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#2bb3b1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="9" x2="9" y2="15"/><line x1="15" y1="9" x2="15" y2="15"/></svg>
    ),
    title: 'Technical SEO',
    desc: 'Enhance your site speed, crawlability, and technical health for higher rankings.',
    link: '#',
  },
];

const SEOSection = () => {
  return (
    <section className="seo-section">
      <div className="seo-section-header">
        <span className="seo-section-label">WHAT WE CAN DO</span>
        <h2 className="seo-section-title">Our Range Of Search Engine Optimization (SEO)</h2>
      </div>
      <div className="seo-cards-container">
        {seoServices.map((service, idx) => (
          <div className="seo-card" key={idx}>
            <div className="seo-card-icon">{service.icon}</div>
            <h3 className="seo-card-title">{service.title}</h3>
            <p className="seo-card-desc">{service.desc}</p>
            <a href={service.link} className="seo-card-link">Learn More <span className="arrow">→</span></a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SEOSection; 