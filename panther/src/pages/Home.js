import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Panther</h1>
      <p className="text-lg text-gray-700 mb-6">Explore our luxury cars and customize your dream ride.</p>
      <Link to="/cars" className="px-6 py-3 text-white bg-black rounded-lg hover:bg-gray-800">Explore Cars</Link>
    </div>
  );
};

export default Home;
