import React from 'react';
import { Home } from "./Home";
import"../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Cart } from "./Cart";
import { CartProvider } from "react-use-cart";

export const App = () => {
  return (
      <CartProvider>
      <Home />
      <Cart />
      </CartProvider>
  );
}


