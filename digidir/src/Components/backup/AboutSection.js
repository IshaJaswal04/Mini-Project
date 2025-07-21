import React from 'react'
import './AboutSection.css'

const AboutSection = () => {
  const backgroundImage = process.env.PUBLIC_URL + '/image/pleasant-friendly-indian-guy.jpg';

  return (
    <section className="about-section">
      <div className="about-section-container">
        {/* Left Side Images */}
        <div className="about-section-left">
          <img src="/image/pleasant-friendly-indian-guy-manager-or-financial-consultant-communicates-with-colleagues-on-a.jpg" alt="Team member smiling" className="about-section-img main" />
          <img src="/image/group-of-business-consultant-working-management-big-data-and-analyze-financial-document-of-company-r4oe89zbfmnncl9af6xlzquwa9l2g1vlt0msjbgxmo.jpg" alt="Team working together" className="about-section-img secondary" />
          <div className="about-section-card">
            <h3>Best Team Works</h3>
            <p>Together we achieve more—each smile we care for is a reflection of our unity and dedication.</p>
          </div>
        </div>
        {/* Right Side Content */}
        <div className="about-section-right">
          <div style={{ marginBottom: '24px' }}>
            <span className="about-section-label">ABOUT US</span>
            <h2 className="about-section-title">
              We Are Experts To Help You<br />
              Achieve Your Goals And<br />
              Maximize Your Success
            </h2>
            <p className="about-section-desc">
              We are digital experts committed to helping you achieve your business goals.
            </p>
            <blockquote className="about-section-quote">
              "Our tailored strategies are designed to maximize your growth and success."
            </blockquote>
          </div>
          <ul className="about-section-list">
            <li><span className="check">✔</span>Expert-driven solutions focused on real results</li>
            <li><span className="check">✔</span>Personalized approach to meet your unique goals</li>
          </ul>
          <a href="#" className="about-section-btn">
            Learn More <span style={{ marginLeft: '8px', fontSize: '1.3rem' }}>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutSection