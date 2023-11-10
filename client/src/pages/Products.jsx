import { useContext, useEffect } from "react";
import { Layout } from "./Layout";
import { ProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import ProductosGrid from "../components/productos/productosGrid/ProductosGrid";
import Loader from "../components/commons/Loader/Loader";

export const Products = () => {
  const { products,isDataLoaded, getByCategoria, getAllProducts } =
    useContext(ProductContext);
  const { categoria } = useParams();

  useEffect(() => {
    if (categoria) {
      getByCategoria(categoria);
    } else {
      getAllProducts();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout filters>
      {isDataLoaded ? (
        <ProductosGrid products={products} />
      ): (
        <Loader />
      )}
    </Layout>
  );
};
