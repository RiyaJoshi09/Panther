import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Panther</h1>
      <div>
        <Link to="/" className="px-4">Home</Link>
        <Link to="/cars" className="px-4">Explore</Link>
        <Link to="/about" className="px-4">About</Link>
        <Link to="/contact" className="px-4">Contact</Link>
        <Link to="/enquiry" classname="px-4">Enquiry</Link>

      </div>
    </nav>
  );
};

export default Navbar;