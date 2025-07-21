import React from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    text: '"Digidir Transformed our online Presence- SEO results were visible within weeks!."',
    name: 'Mr. John Doe',
    role: 'CLIENTS',
  },
  {
    text: '"Their Google Ads strategy brought us quality leads and boosted our ROI significantly."',
    name: 'Peter Backer',
    role: 'CLIENTS',
  },
  {
    text: '"Professional, responsive, and the team truly understands our needs."',
    name: 'Alex Carey',
    role: 'CLIENTS',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-image">
          <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80" alt="Happy clients" />
        </div>
        <div className="testimonials-content">
          <div className="testimonials-header">
            <span className="testimonials-feedback-label">CLIENT FEEDBACK</span>
            <h2>Lets Discover Our Testimonials From Satisfied Clients For Best Services</h2>
          </div>
          <div className="testimonials-cards">
            {testimonials.map((t, idx) => (
              <div className="testimonial-card" key={idx}>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-info">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 