import React from 'react';
import './EmailMarketingRangeSection.css';

const features = [
  {
    icon: (
      <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#2EC4B6" strokeWidth="2.5"><circle cx="24" cy="24" r="22"/><path d="M24 32v-8m0 0v-4a4 4 0 1 1 8 0v4m-8 0h8"/><path d="M18 32h12"/></g></svg>
    ),
    title: 'Automated Sequences',
    description: 'Keep leads engaged with drip campaigns and smart triggers for conversions.',
    link: '#',
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#2EC4B6" strokeWidth="2.5"><rect x="8" y="12" width="32" height="24" rx="4"/><path d="M8 16l16 12 16-12"/></g></svg>
    ),
    title: 'Newsletter Campaigns',
    description: 'Send beautifully designed, value-packed newsletters to your audience.',
    link: '#',
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#2EC4B6" strokeWidth="2.5"><rect x="8" y="12" width="32" height="24" rx="4"/><path d="M24 24v8m0-8a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></g></svg>
    ),
    title: 'Email Analytics',
    description: 'Track open rates, clicks, and conversions to improve performance.',
    link: '#',
  },
];

const EmailMarketingRangeSection = () => {
  return (
    <section className="email-marketing-range-section">
      <div className="section-header">
        <span className="section-subtitle">WHAT WE CAN DO</span>
        <h2 className="section-title">Our Range Of Email Marketing</h2>
      </div>
      <div className="email-marketing-cards">
        <div className="email-marketing-card">
          <div className="icon">
            {/* Lightbulb & gear icon (placeholder SVG) */}
            <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#E6F4F1"/><path d="M20 10a6 6 0 0 1 6 6c0 2.5-1.5 4.5-3.5 5.5V24a2.5 2.5 0 0 1-5 0v-2.5C15.5 20.5 14 18.5 14 16a6 6 0 0 1 6-6Z" stroke="#2EC4B6" strokeWidth="2"/></svg>
          </div>
          <h3>Automated Sequences</h3>
          <p>Keep leads engaged with drip campaigns and smart triggers for conversions.</p>
          <a href="#" className="learn-more">Learn More &rarr;</a>
        </div>
        <div className="email-marketing-card">
          <div className="icon">
            {/* Newsletter icon (placeholder SVG) */}
            <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#E6F4F1"/><rect x="14" y="14" width="12" height="12" rx="2" stroke="#2EC4B6" strokeWidth="2"/><path d="M14 18h12" stroke="#2EC4B6" strokeWidth="2"/></svg>
          </div>
          <h3>Newsletter Campaigns</h3>
          <p>Send beautifully designed, value-packed newsletters to your audience.</p>
          <a href="#" className="learn-more">Learn More &rarr;</a>
        </div>
        <div className="email-marketing-card">
          <div className="icon">
            {/* Analytics icon (placeholder SVG) */}
            <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#E6F4F1"/><path d="M16 24v-4m4 4v-8m4 8v-2" stroke="#2EC4B6" strokeWidth="2"/><path d="M16 20l2-2 2 2 2-2" stroke="#2EC4B6" strokeWidth="2"/></svg>
          </div>
          <h3>Email Analytics</h3>
          <p>Track open rates, clicks, and conversions to improve performance.</p>
          <a href="#" className="learn-more">Learn More &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default EmailMarketingRangeSection; 