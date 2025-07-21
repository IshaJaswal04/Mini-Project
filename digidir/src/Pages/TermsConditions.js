import React from 'react';

const pageStyle = {
  minHeight: '100vh',
  background: 'linear-gradient(90deg, #fafbfc 0%, #f4f6f8 100%)',
  padding: '40px 0',
};

const containerStyle = {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '0 16px',
};

const cardStyle = {
  background: '#fafbfc',
  border: '1px solid #ececec',
  borderRadius: '16px',
  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
  padding: '32px',
  fontFamily: 'Segoe UI, Arial, sans-serif',
  color: '#222',
};

const headingStyle = {
  fontSize: '2rem',
  marginBottom: '1.5rem',
  fontWeight: 700,
  color: '#1a237e',
};

const sectionTitle = {
  fontSize: '1.25rem',
  fontWeight: 600,
  margin: '2rem 0 0.5rem 0',
  color: '#222',
};

const TermsConditions = () => (
  <div style={pageStyle}>
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>📜 Terms and Conditions – DigiDir</h1>
        <p>By accessing or using our website and services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website.</p>
        <div style={sectionTitle}>1. Use of Website</div>
        <p>You agree to use the website only for lawful purposes and not to engage in any activity that interferes with its functionality or integrity.</p>
        <div style={sectionTitle}>2. Intellectual Property</div>
        <p>All content, logos, designs, and graphics on this website are the property of DigiDir and may not be reproduced without permission.</p>
        <div style={sectionTitle}>3. Services</div>
        <p>We provide digital marketing services including but not limited to SEO, Google Ads, social media management, and web development. All service agreements will be documented separately.</p>
        <div style={sectionTitle}>4. Payment & Refund Policy</div>
        <p>Payments are due as per project agreement. Refunds, if applicable, will be processed based on the scope and stage of project completion.</p>
        <div style={sectionTitle}>5. Limitation of Liability</div>
        <p>DigiDir is not liable for any indirect or consequential damages arising from the use of our services or website.</p>
        <div style={sectionTitle}>6. Modifications</div>
        <p>We reserve the right to update these terms at any time. Continued use of the site signifies your acceptance of any changes.</p>
        <div style={sectionTitle}>7. Governing Law</div>
        <p>These terms shall be governed in accordance with the laws of [Your Country/State].</p>
        <div style={sectionTitle}>8. Contact Us</div>
        <p>For inquiries regarding these Terms, contact us at{' '}
          <a href="mailto:support@digidir.info">support@digidir.info</a>
        </p>
        <div style={{marginTop: '2rem', color: '#666', fontSize: '0.95rem'}}>
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  </div>
);

export default TermsConditions; 