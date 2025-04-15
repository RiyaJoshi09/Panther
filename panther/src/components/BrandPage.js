import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardStyle.css';
import Footer from "./Footer";

const brands = [
  { name: 'Aston Martin', logo: '/images/astonmartin.png', path: '/cars/aston-martin' },
  { name: 'Mercedes', logo: '/images/mercedes.png', path: '/cars/mercedes' },
  { name: 'Rolls Royce', logo: '/images/rollsroyce.png', path: '/cars/rolls-royce' },
  { name: 'BMW', logo: '/images/bmw.png', path: '/cars/bmw' },
  { name: 'Jaguar', logo: '/images/jaguar.png', path: '/cars/jaguar' },
  { name: 'Volvo', logo: '/images/volvo.png', path: '/cars/volvo' },
  { name: 'Bugatti', logo: '/images/bugatti.png', path: '/cars/bugatti' },
  { name: 'Alfa Romeo', logo: '/images/alfaromeo.png', path: '/cars/alfaromeo' },
  { name: 'Maserati', logo: '/images/maserati.png', path: '/cars/maserati' },
  // Add more brands here...
];

const BrandPage = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="page-container">
      <h2>Choose a Brand to Customize</h2>
      <div className="card-container">
        {brands.map((brand) => (
          <div key={brand.name} className="card" onClick={() => navigate(brand.path)}>
            <div className="card-img-wrapper">
              <img src={brand.logo} alt={brand.name} />
            </div>
            <p>{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default BrandPage;
