
import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import './CardStyle.css';

const allCars = {
  'aston-martin': [
    { name: 'DB12', image: '/images/am1.png' },
    { name: 'V12 Vantage', image: '/images/am2.png' },
    { name: 'DBX707', image: '/images/am3.png' },
    { name: 'Vulcan', image: '/images/am4.png' },
  ],
  'mercedes': [
    { name: 'GLE 450d 4Matic', image: '/images/mercedes1.png' },
    { name: 'AMG GT23', image: '/images/mercedes2.png' },
    { name: 'AMG G 63', image: '/images/mercedes3.png' },
  ],
  'rolls-royce': [
    { name: 'Spectre', image: '/images/rr1.png' },
    { name: 'Wraith', image: '/images/rr2.png' },
    { name: 'Ghost', image: '/images/rr3.png' },
  ],
  'bmw': [
    { name: 'M8 Competition', image: '/images/rr1.png' },
    { name: 'X7 xDrive40d', image: '/images/rr2.png' },
    { name: 'GT 630d M Sport', image: '/images/rr3.png' },
  ],
  'volvo': [
    { name: 'Phantom', image: '/images/am1.png' },
    { name: 'Phantom', image: '/images/am2.png' },
    { name: 'Ghost', image: '/images/am3.png' },
  ],
  'bugatti': [
    { name: 'Phantom', image: '/images/am4.png' },
    { name: 'Phantom', image: '/images/mercedes1.png' },
    { name: 'Ghost', image: '/images/mercedes2.png' },
  ],
  'alfaromeo': [
    { name: 'Phantom', image: '/images/mercedes3.png' },
    { name: 'Phantom', image: '/images/rr1.png' },
    { name: 'Ghost', image: '/images/am1.png' },
  ],
  'maserati': [
    { name: 'Phantom', image: '/images/am4.png' },
    { name: 'Phantom', image: '/images/rr3.png' },
    { name: 'Ghost', image: '/images/mercedes1.png' },
  ],
  // Add more brands and cars here
};

const CarsPage = () => {
  const { brand } = useParams();
  const cars = allCars[brand] || [];

  return (
    <>
      <div className="page-container">
        <h2>{brand.replace(/-/g, ' ').toUpperCase()}</h2>
        <div className="card-container">
          {cars.length > 0 ? (
            cars.map((car) => (
              <div className="card" key={car.name}>
                <div className="card-img-wrapper">
                  <img src={car.image} alt={car.name} />
                </div>
                <p>{car.name}</p>
              </div>
            ))
          ) : (
            <p>Sorry! Cars for this brand  sold out.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CarsPage;
