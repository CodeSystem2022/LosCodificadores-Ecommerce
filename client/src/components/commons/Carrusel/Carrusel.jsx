import "./Carrusel.css";
import arrow from "../../../assets/icons/arrow.png";
import { useState } from "react";

const Carrusel = ({ items }) => {
  const [limitItems, setLimitItems] = useState(3);

  function incrementPosition() {
    setLimitItems(limitItems + 4);
  }
  function decrementPosition() {
    setLimitItems(limitItems - 4);
  }

  return (
    <div className="carrusel">
      <div className="bannerButtonsContainer">
        <button onClick={decrementPosition}>
          <img src={arrow} />
        </button>
        <button onClick={incrementPosition} className="right">
          <img src={arrow} />
        </button>
      </div>
      <div className="carruselItemsContainer">
        {items.map((item) => (
          <>
              <article
                onClick={() => console.log(item.id)}
                key={item.id}
                className={item.id <= limitItems && item.id > limitItems - 4 ? "carruselItem selected" : "carruselItem"}
              >
                <div
                  className="productImage"
                  style={{ backgroundImage: "url(" + item.image + ")" }}
                ></div>
                <div
                  className="logo"
                  style={{ backgroundImage: "url(" + item.logo + ")" }}
                ></div>
              </article>
          </>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
