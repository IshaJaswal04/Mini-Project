import React from 'react';
import styles from './WhyChooseUs.module.scss';

const WhyChooseUs = () => (
  <section className={styles.root}>
    <h2 className={styles.heading}>Why Choose Lift Digitally?</h2>
    <div className={styles['why-choose-us__features']}>
      <div className={styles['why-choose-us__feature']}>
        <div className={styles['why-choose-us__icon']}>💡</div>
        <div>
          <h3>Expert Team</h3>
          <p>Our digital marketing experts are here to guide you every step of the way.</p>
        </div>
      </div>
      <div className={styles['why-choose-us__feature']}>
        <div className={styles['why-choose-us__icon']}>✔️</div>
        <div>
          <h3>Custom Solutions</h3>
          <p>We tailor our services to meet your business goals.</p>
        </div>
      </div>
      <div className={styles['why-choose-us__feature']}>
        <div className={styles['why-choose-us__icon']}>📢</div>
        <div>
          <h3>Quick Response</h3>
          <p>We value your time and ensure timely responses to all inquiries.</p>
        </div>
      </div>
    </div>
    <div className={styles['why-choose-us__map']}>
      <iframe
        title="Lift Digitally Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.010964479836!2d77.2189273150826!3d28.63242998241906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2e3e5e2e2e1%3A0x7e2e2e2e2e2e2e2e!2sPVR%20Plaza%2C%20Block%20H%2C%20Connaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
        width="600"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
);

export default WhyChooseUs; 