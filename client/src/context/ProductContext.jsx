import { createContext, useState } from "react";
import { useApi } from "../hooks/useApi";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState();
  const [isDataLoaded, setIsDataLoader] = useState(false);

  const { get } = useApi();
  
    function getAllProducts() {
      setIsDataLoader(false);
      get("products").then((res) => {
        setProducts(res);
        setIsDataLoader(true);
      });
    }

  return (
    <ProductContext.Provider
      value={{ products, getAllProducts, getByCategoria, getProductById, isDataLoaded }}
    >
      {children}
    </ProductContext.Provider>
  );
};
