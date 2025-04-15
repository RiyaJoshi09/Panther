import React from "react";
import "../styles/Contact.css";
import contactbg from "../assets/Contactbg.jpg";
import Header from "./Header";

const Contact = () => {
  return (
    <div className="contact-page" style={{ backgroundImage: `url(${contactbg})` }}>
      <div className="overlay">
        <div className="contact-container">
          <h1>Get in Touch</h1>
          <p>Have questions or want to book a custom Panther experience? Reach out to us.</p>

          <form className="contact-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
