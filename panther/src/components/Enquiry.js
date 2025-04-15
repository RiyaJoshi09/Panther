import React, { useState } from "react";
import "../styles/Enquiry.css";
import Header from "./Header";

const Enquiry = () => {
  const [submitted, setSubmitted] = useState(false);
  const carModels = ["Panther X1", "Panther Shadow", "Panther GT", "Panther Velocity"];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic (send to email or backend)
    setSubmitted(true);
  };

  return (
    <div className="enquiry-page">
      <div className="enquiry-container">
        {submitted ? (
          <div className="thank-you">
            <h2>Thank You!</h2>
            <p>Your enquiry has been submitted. We'll get back to you soon.</p>
          </div>
        ) : (
          <>
            <h1>Vehicle Enquiry</h1>
            <p>Interested in a Panther vehicle? Share your details and we’ll reach out.</p>
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" />
              <select required>
                <option value="">Select a Car Model</option>
                {carModels.map((model) => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
              <input type="text" placeholder="Preferred Contact Time" />
              <textarea placeholder="Your Message or Enquiry Details" rows="5" required></textarea>
              <button type="submit">Submit Enquiry</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Enquiry;
