import React, { useState } from "react";
import styles from "./index.module.scss";

const HeroSection = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    website: "",
    audience: "",
    industry: "",
    goals: ""
  });

  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (name === "goals") setCharCount(value.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className={styles.heroSection}>
      <div className={styles.herobgoverlay} />
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <div className={styles.heroBadge}>★ Trusted by 10,000+ Partners</div>
          <h1>
            Earn by Helping <br /> Your <span>Audience</span>
          </h1>
          <p className={styles.heroDesc}>
            Join KaeeraVentures Partner Program and unlock new revenue streams while providing value to your community. Access exclusive tools, resources, and support.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.primary}>Apply Now</button>
            <button className={styles.secondary}>Learn More</button>
          </div>
          <div className={styles.heroStats}>
            <div><span>95%</span><br />Partner Satisfaction</div>
            <div><span>$2.5M+</span><br />Partner Earnings</div>
            <div><span>48hr</span><br />Approval Time</div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <form className={styles.heroForm} onSubmit={handleSubmit}>
            <h2>Start Your Partnership Journey</h2>
            <p className={styles.formSub}>Get approved in 24-48 hours</p>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>First Name *</label>
                <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required />
              </div>
              <div className={styles.formGroup}>
                <label>Last Name *</label>
                <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Email Address *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Company Name</label>
                <input type="text" name="company" value={form.company} onChange={handleChange} />
              </div>
              <div className={styles.formGroup}>
                <label>Website URL</label>
                <input type="url" name="website" value={form.website} onChange={handleChange} placeholder="https://example.com" />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Audience Size *</label>
                <select name="audience" value={form.audience} onChange={handleChange} required>
                  <option value="">Select audience size</option>
                  <option value="1-1k">1-1k</option>
                  <option value="1k-10k">1k-10k</option>
                  <option value="10k-100k">10k-100k</option>
                  <option value=">100k">100k+</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Industry *</label>
                <select name="industry" value={form.industry} onChange={handleChange} required>
                  <option value="">Select your industry</option>
                  <option value="tech">Tech</option>
                  <option value="finance">Finance</option>
                  <option value="education">Education</option>
                  <option value="health">Health</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label>Partnership Goals *</label>
                <textarea
                  name="goals"
                  value={form.goals}
                  onChange={handleChange}
                  maxLength={500}
                  placeholder="Tell us about your partnership goals..."
                  required
                />
                <div className={styles.charCount}>{charCount}/500 characters</div>
              </div>
            </div>
            <button className={styles.submitBtn} type="submit">Submit Application</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

