import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="front">
      {/*<img className="back" src="back_n.png" alt="" />*/}
      <div className="front-child1">
        <h1>
          
          <span className="nova"> Panther:</span>
          The benchmark, never the competition
        </h1>
        <button className="order">
          <a href="#booking">Order now</a>{" "}
        </button>
        <button className="view">
          <Link to="/vehicles">View Cars</Link>
        </button>
      </div>
      <div className="front-child2">
        <img className="car car1" src="Panther.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
