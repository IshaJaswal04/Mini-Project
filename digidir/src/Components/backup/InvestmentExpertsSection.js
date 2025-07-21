import React from 'react';
import './InvestmentExpertsSection.css';

const InvestmentExpertsSection = () => {
  return (
    <div className="investment-experts-section">
      <div className="investment-experts-content">
        <div className="investment-experts-left">
          <div className="investment-experts-label">
            <span className="label-line"></span>
            <span className="label-text">INVESTMENT EXPERTS</span>
          </div>
          <h2 className="investment-experts-title">
            Our Experts Has A Deep Understanding Of The Markets Strategies
          </h2>
          <p className="investment-experts-desc">
            Our experts possess a profound understanding of market strategies, allowing us to craft tailored solutions that align with your business objectives.
          </p>
          <p className="investment-experts-desc">
            With years of experience and in-depth industry knowledge, we stay ahead of market trends and implement innovative approaches that maximize your competitive edge.
          </p>
          <div className="investment-experts-bullet">
            <span className="checkmark">✔</span>
            <span>Our experts have a deep understanding of market strategies to drive your business forward.</span>
          </div>
        </div>
        <div className="investment-experts-right">
          <div className="investment-experts-images">
            <img src="/image/pleasant-friendly-indian-guy-manager-or-financial-consultant-communicates-with-colleagues-on-a.jpg" alt="Expert Discussion" className="expert-img-top" />
            <img src="/image/group-of-business-consultant-working-management-big-data-and-analyze-financial-document-of-company-r4oe89zbfmnncl9af6xlzquwa9l2g1vlt0msjbgxmo.jpg" alt="Expert Analysis" className="expert-img-bottom" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentExpertsSection; 