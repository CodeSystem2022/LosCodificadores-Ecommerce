import { useContext, useEffect } from "react";
import { Layout } from "./Layout";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import ProductComponent from "../components/product/Product";

export const Product = () => {
  const { id } = useParams();
  const { getProductById, actualProduct } = useContext(ProductContext);

  useEffect(() => {
    if(id){
      getProductById(id)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <ProductComponent product={actualProduct}/>
    </Layout>
  );
};
