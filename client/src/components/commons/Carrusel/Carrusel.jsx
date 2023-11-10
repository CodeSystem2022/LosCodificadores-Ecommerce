import "./Carrusel.css";
import arrow from "../../../assets/icons/arrow.png";
import { useHandleCarrusel } from "../../../hooks/useHandleCarrusel";
import { Card } from "../Card/Card";

const Carrusel = ({ items, itemsPerView = 4, variant }) => {
  const {
    actualGroup,
    decrementPosition,
    incrementPosition,
    isInActualGroup,
    isInNextGroup,
    isInPrevGroup,
  } = useHandleCarrusel(itemsPerView);

  return (
    <div className="carrusel">
      <div className="bannerButtonsContainer">
        <button
          className="btn primary_icon"
          onClick={decrementPosition}
          disabled={actualGroup === 1 ? true : false}
        >
          <img src={arrow} />
        </button>
        <button
          onClick={incrementPosition}
          className="btn primary_icon right"
          disabled={
            Math.round(items.length / itemsPerView) <= actualGroup
              ? true
              : false
          }
        >
          <img src={arrow} />
        </button>
      </div>
      <div className="carruselItemsContainer">
        {items.map((item, idx) => (
          <>
            {variant === "categoria" ? (
              <Card
                item={item}
                className={
                  isInActualGroup(idx)
                    ? "carruselItem selected"
                    : isInPrevGroup(idx)
                    ? "carruselItem prev"
                    : isInNextGroup(idx)
                    ? "carruselItem next"
                    : "carruselItem"
                }
              />
            ) : (
              <article
                onClick={() => console.log(item._id)}
                key={item.id}
                className={
                  isInActualGroup(item.id)
                    ? "carruselItem selected"
                    : isInPrevGroup(item.id)
                    ? "carruselItem prev"
                    : isInNextGroup(item.id)
                    ? "carruselItem next"
                    : "carruselItem"
                }
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
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
