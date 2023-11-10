import Button from "../Button/Button";
import "./Card.css";

export const Card = ({ item, className }) => {
  const { _id, name, description, images, price, offer } = item;
  return (
    <article className={className + " card"} id={_id}>
      <img src={images[0] + ".jpg"} alt="product" />
      <h2>{name.length > 25 ? name.slice(0, 25) + "..." : name}</h2>
      <p>
        {description.length > 40
          ? description.slice(0, 40) + "..."
          : description}
      </p>
      <span className="price">
        {offer ? (
          <>
            <span className="oldprice">${price}</span> $
            {Math.round(price - price * 0.1)}
          </>
        ) : (
          `$${price}`
        )}
      </span>
      <div
        className="btnContainer"
        style={{width: '100%'}}
        onClick={() => (window.location.href = `/producto/${_id}`)}
      >
          <Button text="Ver producto" variant="primary" />
      </div>
    </article>
  );
};
