import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <section className="contact-section">
        <h2>Contact Me</h2>
        <p>Have a question or want to work together? Send me a message!</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
