import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Car from "./Car";
import Suv from "./Suv";
import Van from "./Van";
import Truck from "./Track";
import Reserve from "./Reserve";
import { MyContext } from "../../context/MyContext";

const Products = () => {
  const navigate = useNavigate();
  const { isButtonClicked } = useContext(MyContext);

  const [clickedTabs, setClickedTabs] = useState({
    A: true,
    B: false,
    C: false,
    D: false,
  });

  const handleClick = (tab, route) => {
    setClickedTabs({
      A: tab === "A",
      B: tab === "B",
      C: tab === "C",
      D: tab === "D",
    });
    navigate(route);
  };

  return (
    <div className="products" id="product">
      <img className="back2" src="back_n2.png" alt="" />
      <div className="prod-cont">
        {/* Featured Cars Section */}
        <div className="cars-child1">
          <div className="cars1-topic">
            <h1>FEATURED CARS</h1>
            <img src="hr.svg" alt="" />
            <p>“Panther's Special Picks for Seamless City Driving.”</p>
          </div>

          <div className="cars1-main">
            {/* Car 1 */}
            <div className="cars1-main-child">
              <div className="car-cont1">
                <img className="f1-car" src="f1_car.jpg" alt="Mercedes-Benz-CL5" />
              </div>
              <div className="car-cont2">
                <h1>Mercedes-Benz-CL5</h1>
                <hr />
                <button
                  onClick={() => navigate("/enquiry", { state: { carName: "Mercedes-Benz-CL5" } })}
                  className="feature-btn"
                >
                  Enquire Now
                </button>
              </div>
            </div>

            {/* Car 2 */}
            <div className="cars2-main-child">
              <div className="car-cont1">
                <img className="f2-car" src="f3_car.jpg" alt="BMW M4" />
              </div>
              <div className="car-cont2">
                <h1>BMW M4</h1>
                <hr />
                <button
                  onClick={() => navigate("/enquiry", { state: { carName: "BMW M4" } })}
                  className="feature-btn"
                >
                  Enquire Now
                </button>
              </div>
            </div>

            {/* Car 3 */}
            <div className="cars3-main-child">
              <div className="car-cont1">
                <img className="f3-car" src="f2_car.jpg" alt="Audi A1" />
              </div>
              <div className="car-cont2">
                <h1>Audi A1</h1>
                <hr />
                <button
                  onClick={() => navigate("/enquiry", { state: { carName: "Audi A1" } })}
                  className="feature-btn"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Product Section */}
        <div className="cars-child2">
          <div className="cars2-topic">
            <h1>PRODUCTS</h1>
            <img src="hr.svg" alt="" />
            <p>
              “Panther Cars: Builted for those who demand excellence,
              performance, and a touch of luxury on the road.”
            </p>
          </div>

          <div className="cars2-main">
            <div className="tab-btns-cont">
              <div
                onClick={() => handleClick("A", "/aston-martin")}
                className={`tab-btns ${clickedTabs.A ? "tab-clicked" : ""}`}
              >
                <p>Aston Martin</p>
              </div>
              <div
                onClick={() => handleClick("B", "/mercedes")}
                className={`tab-btns ${clickedTabs.B ? "tab-clicked" : ""}`}
              >
                <p>Mercedes</p>
              </div>
              <div
                onClick={() => handleClick("C", "/rolls-royce")}
                className={`tab-btns ${clickedTabs.C ? "tab-clicked" : ""}`}
              >
                <p>Rolls Royce</p>
              </div>
              <div
                onClick={() => handleClick("D", "/bmw")}
                className={`tab-btns ${clickedTabs.D ? "tab-clicked" : ""}`}
              >
                <p>BMW</p>
              </div>
            </div>

            {/* Optional: These can still render or be removed */}
            <Car clickState={clickedTabs.A} />
            <Suv clickState={clickedTabs.B} />
            <Truck clickState={clickedTabs.C} />
            <Van clickState={clickedTabs.D} />
            <Reserve context={isButtonClicked} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
