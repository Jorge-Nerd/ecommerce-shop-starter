import React from "react";
import { useState, useEffect, createContext } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProduct(data)
      console.log(data);
    };
    fetchProduct();
  }, []);
  return (
    <ProductContext.Provider value={{product, setProduct}} >
      {children}
    </ProductContext.Provider>);
};

export default ProductProvider;
