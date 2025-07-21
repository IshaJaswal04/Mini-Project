import React from "react";
import styles from "./ChatWidgets.module.scss";

const widgetData = [
  {
    icon: (
      <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#4F8CFF" opacity="0.2"/><path d="M24 16a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="#4F8CFF"/></svg>
    ),
    title: "Expanded Chat Assistant",
    desc: "Draws attention with an overlay display and auto-triggers after 15 seconds.",
    features: [
      "Auto-trigger",
      "Overlay display",
      "Multiple sizes",
      "High conversion"
    ]
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#7B61FF" opacity="0.2"/><rect x="16" y="20" width="16" height="8" rx="2" fill="#7B61FF"/><rect x="20" y="24" width="8" height="2" rx="1" fill="#fff"/></svg>
    ),
    title: "Subtle Chat Assistant",
    desc: "Anchored at the bottom right, manually triggered to expand into a chat assistant.",
    features: [
      "Bottom-right anchor",
      "Manual trigger",
      "Minimalistic",
      "Clean design"
    ]
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#FF5CA7" opacity="0.2"/><rect x="14" y="16" width="20" height="16" rx="3" fill="#FF5CA7"/><rect x="18" y="22" width="12" height="2" rx="1" fill="#fff"/></svg>
    ),
    title: "Lightbox Chat Assistant",
    desc: "A dynamic full-screen takeover widget designed for legal, medical, and veterinary service categories.",
    features: [
      "Full-screen mode",
      "User activated",
      "Professional",
      "Compliance ready"
    ]
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#FF5C7C" opacity="0.2"/><rect x="16" y="16" width="16" height="16" rx="3" fill="#FF5C7C"/><rect x="22" y="22" width="4" height="4" rx="1" fill="#fff"/></svg>
    ),
    title: "Fixed Chat Assistant",
    desc: "A fixed-width widget that fits well into various layouts while providing interactive experience.",
    features: [
      "Fixed width",
      "Layout friendly",
      "Interactive",
      "Versatile"
    ]
  }
];

const ChatWidgets = () => (
  <section className={styles.chatWidgetsSection}>
    <div className={styles.header}>
      <span className={styles.premium}>PREMIUM SOLUTIONS</span>
      <h2 className={styles.title}>Our Top-Performing<br/>Chat Widgets</h2>
      <p className={styles.subtitle}>
        Transform your customer engagement with our professionally designed chat widgets.<br/>
        Each optimized for different use cases and conversion goals.
      </p>
      <div className={styles.statsRow}>
        <div>
          <span className={styles.statValue}>50K+</span>
          <span className={styles.statLabel}>Active Deployments</span>
        </div>
        <div>
          <span className={styles.statValue}>98%</span>
          <span className={styles.statLabel}>Customer Satisfaction</span>
        </div>
        <div>
          <span className={styles.statValue}>24/7</span>
          <span className={styles.statLabel}>Support Available</span>
        </div>
        <div>
          <span className={styles.statValue} style={{color:'#D72660'}}>3x</span>
          <span className={styles.statLabel}>Conversion Boost</span>
        </div>
      </div>
    </div>
    <div className={styles.widgetsRow}>
      {widgetData.map((w, i) => (
        <div className={styles.widgetCard} key={i}>
          <div className={styles.icon}>{w.icon}</div>
          <h3 className={styles.widgetTitle}>{w.title}</h3>
          <p className={styles.widgetDesc}>{w.desc}</p>
          <ul className={styles.featuresList}>
            {w.features.map((f, j) => (
              <li key={j}>✓ {f}</li>
            ))}
          </ul>
          <button className={styles.learnMore}>Learn More</button>
        </div>
      ))}
    </div>
    <div className={styles.ctaSection}>
      <h2 className={styles.ctaTitle}>Ready to Boost Your Conversions?</h2>
      <p className={styles.ctaSubtitle}>Join thousands of businesses already using our chat widgets to improve customer engagement.</p>
      <div className={styles.ctaButtons}>
        <button className={styles.ctaBtnPrimary}>Start Free Trial</button>
        <button className={styles.ctaBtnSecondary}>View Pricing</button>
      </div>
    </div>
  </section>
);

export default ChatWidgets; 