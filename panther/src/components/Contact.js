import React, { useRef, useState } from "react";
import "../styles/Contact.css";
import contactbg from "../assets/Contactbg.jpg";
import Footer from "./Footer";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dk06bp6", 
        "template_ihtoibm", 
        form.current,
        "YFrqLZMZl2eqZXOtx" 
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setTimeout(() => setIsSent(false), 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div
        className="contact-page"
        style={{ backgroundImage: `url(${contactbg})` }}
      >
        <div className="overlay">
          <div className="contact-container">
            <h1>Get in Touch</h1>
            <p>
              Have questions or want to book a custom Panther experience? Reach
              out to us.
            </p>

            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              {isSent && (
                <div className="confirm-cont">
                  <p style={{ color: "green", fontWeight: "bold" }}>
                    Sent successfully!
                  </p>
                </div>
              )}
              <input
                type="text"
                placeholder="Full Name"
                name="user_name"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                name="user_email"
                required
              />
              <input type="text" placeholder="Subject" name="subject" />
              <textarea
                placeholder="Your Message"
                name="message"
                rows="5"
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
