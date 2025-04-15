import React from "react";
import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <div className="front">
      <img className="back" src="back_n.png" alt="" />
      <div className="front-child1">
        <h1>
          <span className="nova"> Panther: </span>
          Built to lead, never follow
        </h1>

        <button className="view">
          <Link to="/brands">View Cars</Link>
        </button>
      </div>
      <div className="front-child2">
        <img className="car car1" src="Panther.png" alt="" />
      </div>
    </div>
  );
};

export default FrontPage;
