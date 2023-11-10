import { useContext, useState } from "react";
import Loader from "../../components/commons/Loader/Loader";
import Button from "../../components/commons/Button/Button";
import { ProductContext } from "../../context/ProductContext";
import "./Product.css";
import { CartContext } from "../../context/CartContext";

const ProductComponent = ({product}) => {
  const { isDataLoaded } = useContext(ProductContext);
  const { increaseCartQuantity, decreaseCartQuantity, getItemQuantity } =
    useContext(CartContext);
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <>
      {isDataLoaded && product ? (
        <section id="product">
          <div className="images-container">
            <div className="actual-image">
              <img
                src={product?.images[selectedImage] + ".jpg"}
                alt="full view"
              />
            </div>
            <div className="all-images">
              {product?.images.map((image, idx) => (
                <img
                  onClick={() => setSelectedImage(idx)}
                  src={image + ".jpg"}
                  alt="prev view"
                  key={idx}
                  className={image === product?.images[selectedImage] ? 'selected': ''}
                />
              ))}
            </div>
          </div>
          <div className="product-description">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="stock">
              En carrito: {getItemQuantity(product._id)}{" "}
              {getItemQuantity(product._id) > 1 ? "unidades" : "unidad"}{" "}
              (Disponibles: {product.stock})
            </p>
            <span className="price">
              {product.offer ? (
                <>
                  <span className="oldprice">${product.price}</span> $
                  {Math.round(product.price - product.price * 0.1)}
                </>
              ) : (
                `$${product.price}`
              )}
            </span>
            <div>
              {getItemQuantity(product._id) > 0 ? (
                <>
                  <div className="btn-container">
                    <Button
                      text="-"
                      variant="secondary_icon"
                      onClick={() => decreaseCartQuantity(product)}
                    />
                    {getItemQuantity(product._id)}
                    <Button
                      text="+"
                      variant="secondary_icon"
                      onClick={() => increaseCartQuantity(product)}
                      disabled={product.stock <= getItemQuantity(product._id)}
                    />
                  </div>
                </>
              ) : (
                <Button
                  text="Agregar al carrito"
                  variant="secondary"
                  onClick={() => increaseCartQuantity(product)}
                  disabled={product.stock <= getItemQuantity(product._id)}
                />
              )}
            </div>
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ProductComponent;
