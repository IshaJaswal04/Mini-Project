import React from 'react';
import styles from './ContactForm.module.scss';

const ContactForm = () => (
  <section className={styles['contact-form-section']}>
    <h2>Keep in Touch with Us</h2>
    <p>Have a specific question or project in mind? Fill out the form below, and we’ll get back to you promptly.</p>
    <form className={styles['contact-form']}>
      <input type="text" placeholder="Name" name="name" required />
      <input type="email" placeholder="Email" name="email" required />
      <input type="tel" placeholder="Phone Number" name="phone" />
      <textarea placeholder="Message..." name="message" required />
      <button type="submit">Submit</button>
    </form>
  </section>
);

export default ContactForm; 