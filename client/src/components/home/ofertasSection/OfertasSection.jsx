import { useContext, useEffect, useState } from "react";
import { Card } from "../../commons/Card/Card";
import { ProductContext } from "../../../context/ProductContext";

const OfertasSection = () => {
  const [products, setProducts] = useState([]);

  const { getOfferedProducts } = useContext(ProductContext);

  useEffect(() => {
    getOfferedProducts().then((res) => setProducts(res.products));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section id="ofertasSection">
      <div className="section-text">
        <h2>Las mejores ofertas</h2>
        <span>En todos nuestras computadoras y artefactos</span>
      </div>
      <div className="itemsContainer">
        {products.map((product) => (
          <Card key={product.id} item={product} />
        ))}
      </div>
    </section>
  );
};

export default OfertasSection;

