import React, { useState } from 'react';
import styles from './FAQ.module.scss';

const faqs = [
  {
    question: 'What digital marketing services do you offer?',
    answer: 'We offer SEO, PPC, social media marketing, content marketing, email marketing, and web analytics services tailored to your business needs.'
  },
  {
    question: 'How long does it take to see results from digital marketing?',
    answer: 'Results vary by service, but most clients start seeing measurable improvements within 3-6 months of consistent digital marketing efforts.'
  },
  {
    question: 'Can you help with both B2B and B2C marketing?',
    answer: 'Yes, our team has experience in both B2B and B2C digital marketing strategies, ensuring the right approach for your target audience.'
  },
  {
    question: 'How do you measure the success of digital marketing campaigns?',
    answer: 'We use KPIs such as website traffic, lead generation, conversion rates, and ROI to measure and report the success of your campaigns.'
  },
  {
    question: 'Is there a minimum contract period for your services?',
    answer: 'We offer flexible plans, but we recommend a minimum commitment of 3 months to achieve optimal results.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqSection}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {faqs.map((faq, idx) => (
          <div key={idx} className={styles.faqItem}>
            <button className={styles.question} onClick={() => toggleFAQ(idx)}>
              {faq.question}
              <span className={styles.icon}>{openIndex === idx ? '-' : '+'}</span>
            </button>
            {openIndex === idx && (
              <div className={styles.answer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ; 