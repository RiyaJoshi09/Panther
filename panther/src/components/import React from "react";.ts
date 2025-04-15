import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BrandPage from "./pages/BrandPage";
import CarsPage from "./pages/CarsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App()  {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brands" element={<BrandPage />} />
          {/* Add more routes as needed */}
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;

