import Home from "./Home";
import Vehicles from "./Vehicles";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import { MyProvider } from "../context/MyContext";
import { Route, Routes } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <StyledEngineProvider injectFirst>
      <MyProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/vehicles" element={<Vehicles />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </MyProvider>
    </StyledEngineProvider>
  );
}

export default App;
