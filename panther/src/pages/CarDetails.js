import React from "react";
import { useParams } from "react-router-dom";

const CarDetails = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">Car Details (ID: {id})</h2>
      <p>More details about the selected car...</p>
    </div>
  );
};

export default CarDetails;
