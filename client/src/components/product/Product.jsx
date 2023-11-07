import { useContext, useState } from "react";
import Loader from "../../components/commons/Loader/Loader";
import Button from "../../components/commons/Button/Button";
import { ProductContext } from "../../context/ProductContext";
import "./Product.css";

const ProductComponent = () => {
  const { products, isDataLoaded } = useContext(ProductContext);
  const [selectedImage, setSelectedImage] = useState(0);
  console.log(products);
  return (
    <>
      {isDataLoaded ? (
        <section id="product">
          <div className="images-container">
            <div className="actual-image">
              <img
                src={products?.images[selectedImage] + ".jpg"}
                alt="full view"
              />
            </div>
            <div className="all-images">
              {products?.images.map((image, idx) => (
                <img
                  onClick={() => setSelectedImage(idx)}
                  src={image + ".jpg"}
                  alt="prev view"
                  key={idx}
                />
              ))}
            </div>
          </div>
          <div className="product-description">
            <h2>{products.name}</h2>
            <p>{products.description}</p>
            <span>
              {products.offer ? (
                <>
                  <span className="oldprice">${products.price}</span> $
                  {products.price - products.price * 0.1}
                </>
              ) : (
                products.price
              )}
            </span>
            <div>
              <Button text="Agregar al carrito" variant="secondary" />
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
