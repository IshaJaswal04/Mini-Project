import React, { useState } from 'react';
import styles from './index.module.scss';

const faqs = [
  {
    question: 'How much can I earn as a KaeeraVentures partner?',
    answer:
      'Partner earnings vary based on your audience size, engagement, and promotion strategy. Our commission rates range from 15% to 35% of recurring revenue. Top partners earn $10,000+ monthly. We provide detailed analytics to help you optimize your earnings and offer performance bonuses for high-performing partners. The average partner earns $2,500 in their first 6 months.'
  },
  {
    question: 'How do I apply to be a partner?',
    answer: 'Simply fill out the application form available on this page.'
  },
  {
    question: 'What are the qualifications?',
    answer: 'Professionals from various fields such as healthcare, technology, and more are welcome to join.'
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={styles.faqWrapper}>
      <h1 className={styles.faqTitle}>Frequently Asked Questions</h1>
      <p className={styles.faqSubtitle}>Everything you need to know about our partner program</p>
      <div className={styles.faqList}>
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={styles.faqItem + ' ' + (openIndex === idx ? styles.open : '')}
          >
            <div
              className={styles.faqQuestion}
              onClick={() => handleToggle(idx)}
              tabIndex={0}
              role="button"
              aria-expanded={openIndex === idx}
            >
              <span>{faq.question}</span>
              <span className={styles.arrow}>{openIndex === idx ? '\u25B2' : '\u25BC'}</span>
            </div>
            {openIndex === idx && (
              <div className={styles.faqAnswer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Faq;
