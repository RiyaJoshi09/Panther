import React from 'react';
import './CardStyle.css';

const cars = [
  { name: 'DB11', image: '/images/db11.png' },
  { name: 'Vantage', image: '/images/vantage.png' },
  { name: 'DBS Superleggera', image: '/images/dbs.png' },
  // Add more cars for the brand
];

const CarsPage = () => {
  return (
    <div className="page-container">
      <h2>Available Models</h2>
      <div className="card-container">
        {cars.map((car) => (
          <div key={car.name} className="card">
            <img src={car.image} alt={car.name} />
            <p>{car.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsPage;
