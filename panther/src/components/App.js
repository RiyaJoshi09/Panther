import Home from "./Home";
import Vehicles from "./Vehicles";
import About from "./About";
import Contact from "./Contact";
import { MyProvider } from "../context/MyContext";
import { Route, Routes } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div>
    <Header />
    <StyledEngineProvider injectFirst>
      <MyProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/vehicles" element={<Vehicles />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signup" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </MyProvider>
    </StyledEngineProvider>
    </div>
  );
}

export default App;
