import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//Import product provider
import ProductProvider from "./contexts/ProductContext";
//import sidebar provider
import SidebarContextProvider from "./contexts/SidebarContext";
//import cartContext
import CartContextProvider from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <SidebarContextProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </SidebarContextProvider>
    </CartContextProvider>
  </React.StrictMode>
);
