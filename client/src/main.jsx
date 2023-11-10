import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>
);
