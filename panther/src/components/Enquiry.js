import React, { useState, useEffect } from "react";
import "../styles/Enquiry.css";
import { useLocation } from 'react-router-dom';

const Enquiry = () => {
  const location = useLocation();
  const [submitted] = useState(false);
  const [carModel, setCarModel] = useState('');

  useEffect(() => {
    if (location.state && location.state.carName) {
      setCarModel(location.state.carName);
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Enquiry submitted for ${carModel}`);
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
              
              <input
                type="text"
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
                placeholder="Car Model"
                required
              />

              <input type="text" placeholder="Preferred Contact Time" />
              <textarea
                placeholder="Your Message or Enquiry Details"
                rows="5"
                required
              ></textarea>
              <button type="submit">Submit Enquiry</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Enquiry;