import React from "react";
//import context
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleCart = (id, title) => {
    console.log(`item ${title} nº ${id} handle to the card`);
  };
  return (
    <CartContext.Provider value={{ cart, setCart, handleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
