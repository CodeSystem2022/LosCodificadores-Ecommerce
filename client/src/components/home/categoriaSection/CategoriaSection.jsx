import { useContext, useEffect, useState } from "react";
import Carrusel from "../../commons/Carrusel/Carrusel";
import "./CategoriaSection.css";
import { ProductContext } from "../../../context/ProductContext";
import Loader from "../../commons/Loader/Loader";

const CategoriaSection = ({ categoriaTitle }) => {
  const [products, setProducts] = useState([]);

  const { getProductsByCategory } = useContext(ProductContext);

  useEffect(() => {
    getProductsByCategory(categoriaTitle).then((res) =>
      setProducts(res)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="categoriaContainer">
      <div className="title-link">
        <h2>{categoriaTitle}</h2>
        <a href={"/productos/" + categoriaTitle}>Ver {categoriaTitle}</a>
      </div>
      {products ? (
        <Carrusel items={products} variant="categoria" />
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default CategoriaSection;
