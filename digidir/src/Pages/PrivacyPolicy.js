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

const PrivacyPolicy = () => (
  <div style={pageStyle}>
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>🔒 Privacy Policy – DigiDir</h1>
        <p>At DigiDir, your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://digidir.info" target="_blank" rel="noopener noreferrer">https://digidir.info</a> or interact with our services.</p>
        <div style={sectionTitle}>1. Information We Collect</div>
        <ul>
          <li><strong>Personal Information:</strong> Name, email, phone number, etc., when you fill out a form or contact us.</li>
          <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and time spent for analytics purposes.</li>
          <li><strong>Cookies:</strong> To enhance your user experience and track usage patterns.</li>
        </ul>
        <div style={sectionTitle}>2. How We Use Your Information</div>
        <ul>
          <li>To respond to inquiries or provide customer support</li>
          <li>To send marketing emails (if opted-in)</li>
          <li>To improve our website and services</li>
          <li>For analytics and ad performance tracking</li>
        </ul>
        <div style={sectionTitle}>3. Sharing Your Information</div>
        <ul>
          <li>We do not sell or rent your information. We may share data with:</li>
          <li>Trusted service providers (e.g., analytics, email services)</li>
          <li>Legal authorities if required by law</li>
        </ul>
        <div style={sectionTitle}>4. Data Security</div>
        <p>We implement industry-standard security measures to protect your data, but no online transmission is 100% secure.</p>
        <div style={sectionTitle}>5. Your Choices</div>
        <p>You can opt out of marketing emails at any time and manage cookie preferences through your browser.</p>
        <div style={sectionTitle}>6. Third-Party Links</div>
        <p>Our website may contain links to external websites. We are not responsible for their privacy practices.</p>
        <div style={sectionTitle}>7. Contact Us</div>
        <p>For questions regarding this policy, email us at <a href="mailto:support@digidir.info">support@digidir.info</a></p>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy; 