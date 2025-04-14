import Client from "./Clients";
import Step from "./Step";
import ChooseUs from "./ChooseUs";
import Testimonial from "./Testimonial";
import BasicAccordion from "./Faq";
import MobileApp from "./MobileApp";
import Footer from "../Footer";

const Truck = (props) => {
  return (
    <div
      style={{
        opacity: props.clickState ? "1" : "0",
        zIndex: props.clickState ? "10" : "",
      }}
      className="type-truck type"   
    >
      <div className="cars-main">
        {/* --- All the car listings remain unchanged --- */}
        {/* ... */}
      </div>
  

      <Client />
      <Step />
      <ChooseUs />
      <Testimonial />
      <BasicAccordion />
      <MobileApp />
      <Footer />
    </div>
  );
};

export default Truck;
