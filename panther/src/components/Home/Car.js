import Step from "./Step";
import ChooseUs from "./ChooseUs";
import Testimonial from "./Testimonial";
import BasicAccordion from "./Faq";
import MobileApp from "./MobileApp";
import Footer from "../Footer";

const Car = (props) => {
  return (
    <div
      className="type-car type"
      style={{
        opacity: props.clickState ? "1" : "0",
        zIndex: props.clickState ? "10" : "",
      }}
    >
      <div className="cars-main">
        {/* ...[your car listing blocks here]... */}
      </div>

      <Step />
      <ChooseUs />
      <Testimonial />
      <BasicAccordion />
      <MobileApp />
      <Footer />
    </div>
  );
};

export default Car;
