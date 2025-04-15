import React from "react";
import "../styles/About.css";
import heroImage from "../assets/panther-hero1.jpg";
import conceptCar from "../assets/concept1.jpg";
import factoryImage from "../assets/factory.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <img src={heroImage} alt="Panther Hero" className="hero-img" />
        <div className="hero-text">
          <h1>Precision. Power. Panther.</h1>
          <p>Panther redefines the art of automotive excellence.</p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="about-section">
        <div className="text">
          <h2>About Panther</h2>
          <p>
            Panther was born out of a passion for performance and precision.
            Inspired by luxury and engineered for thrill, Panther delivers elite
            vehicles that blend futuristic design with unmatched performance.
            Our mission is to craft driving experiences that excite and inspire.
          </p>
        </div>
        <img src={factoryImage} alt="Panther Factory" className="about-img" />
      </section>

      {/* Our Values */}
      <section className="values-section">
        <h2>Our Philosophy</h2>
        <div className="values">
          <div className="value-box">
            <h3>Innovation</h3>
            <p>At the core of every Panther car lies cutting-edge technology.</p>
          </div>
          <div className="value-box">
            <h3>Craftsmanship</h3>
            <p>Built with detail, finesse, and absolute perfection.</p>
          </div>
          <div className="value-box">
            <h3>Exclusivity</h3>
            <p>Limited production. Unlimited impact.</p>
          </div>
        </div>
      </section>

      {/* Image Highlight */}
      <section className="highlight">
        <img src={conceptCar} alt="Concept Panther Car" />
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to ride with Panther?</h2>
        <Link to="/cars" className="px-6 py-3 text-white bg-black rounded-lg hover:bg-gray-800"><button className="cta-btn">Explore our Cars</button></Link>
      </section>
    </div>
  );
};

export default About;