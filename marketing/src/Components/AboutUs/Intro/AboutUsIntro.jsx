import React from 'react';
import styles from './AboutUsIntro.module.scss';

const AboutUsIntro = () => (
  <section className={styles.introSection}>
    <div className={styles.left}>
      <h1>
       Strengthen Customer Loyalty with Cutting-Edge Digital Solutions”
      </h1>
      <p>
        Digital transformation today goes far beyond e-commerce and CRM—it is about reshaping business strategies in response to rapid technological evolution. As global markets shift, a digital-first approach has become essential for staying competitive, agile, and customer-centric.
      </p>
      <p>
       Partnering with a trusted digital transformation expert is key to successful tech adoption and seamless integration of data and systems across your organization. With the right guidance, businesses can harness tools like SEO, web development, and targeted advertising to enhance visibility, drive engagement, and deliver exceptional user experiences.
      </p>
    </div>
    <div className={styles.right}>
      <img src="https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg" alt="Team working together" />
    </div>
  </section>
);

export default AboutUsIntro; 