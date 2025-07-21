import React from 'react';
import './GoogleAdsRangeSection.css';

const cards = [
  {
    icon: (
      <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="#2ec4b6" strokeWidth="2" />
        <path d="M20 10v10l7 7" stroke="#2ec4b6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Search Campaigns',
    desc: 'Be at the top of search results when potential clients are looking.',
    link: '#',
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="12" width="24" height="16" rx="2" stroke="#2ec4b6" strokeWidth="2" />
        <rect x="14" y="18" width="12" height="4" rx="1" stroke="#2ec4b6" strokeWidth="2" />
      </svg>
    ),
    title: 'Display Ads',
    desc: 'Boost your visibility through visual banners on Google\'s vast network.',
    link: '#',
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="14" stroke="#2ec4b6" strokeWidth="2" />
        <circle cx="20" cy="20" r="6" stroke="#2ec4b6" strokeWidth="2" />
        <path d="M20 10v4M20 26v4M10 20h4M26 20h4" stroke="#2ec4b6" strokeWidth="2" />
      </svg>
    ),
    title: 'Retargeting',
    desc: 'Bring back interested visitors with smart ad retargeting.',
    link: '#',
  },
];

const GoogleAdsRangeSection = () => (
  <section className="google-ads-range-section">
    <div className="google-ads-range-bg">
      <div className="google-ads-range-header">
        <span className="google-ads-range-subtitle">WHAT WE CAN DO</span>
        <h2>Our Range Of Google Ads</h2>
      </div>
      <div className="google-ads-range-cards">
        {cards.map((card, idx) => (
          <div className="google-ads-range-card" key={idx}>
            <div className="google-ads-range-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <a className="google-ads-range-link" href={card.link}>Learn More &rarr;</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GoogleAdsRangeSection; 