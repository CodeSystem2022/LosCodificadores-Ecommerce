import { createContext, useState } from "react";
import { useApi } from "../hooks/useApi";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [actualProduct, setActualProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [isDataLoaded, setIsDataLoader] = useState(false);

  const { get } = useApi();

  function getByCategoria(categoria) {
    setIsDataLoader(false);
    if(categoria){
      get(`products/${categoria}`).then((res) => {
        setProducts(res);
        setIsDataLoader(true);
      });
    }
  }

  function getAllProducts() {
    setIsDataLoader(false);
    get("products").then((res) => {
      setProducts(res);
      setIsDataLoader(true);
    });
  }

  async function getProductById(id) {
    setIsDataLoader(false);
    const product = await get(`product/${id}`);
    if (product) {
      setIsDataLoader(true);
      setActualProduct(product);
      return product;
    }
  }

  async function getOfferedProducts(limit = 4) {
    const products = await get(`get-offered/?q=${limit}`);
    if (products) {
      return products;
    }
  }

  async function getProductBySearch(query) {
    const products = await get(`search/product/?q=${query}`);
    if (products) {
      return products;
    }
  }

  async function getProductsByCategory(category){
    const products = await get(`products/${category}`);
    if (products) {
      return products;
    }
  }

  function orderProductsByLowerPrice(){
    const newProducts = products.sort((prev, actual) => prev.price - actual.price)
    setIsDataLoader(false)
    setTimeout(()=>{
      setProducts(newProducts)
      setIsDataLoader(true)
    },2000)
  }
  function orderProductsByHigherPrice(){
    const newProducts = products.sort((prev, actual) =>  actual.price - prev.price)
    setIsDataLoader(false)
    setTimeout(()=>{
      setProducts(newProducts)
      setIsDataLoader(true)
    },2000)
  }
  return (
    <ProductContext.Provider
      value={{
        products,
        actualProduct,
        getAllProducts,
        getOfferedProducts,
        getByCategoria,
        getProductById,
        getProductBySearch,
        getProductsByCategory,
        orderProductsByLowerPrice,
        orderProductsByHigherPrice,
        isDataLoaded,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
