// utils/context/ShoppingCartContext.js
import React, { createContext, useState, useContext } from 'react';

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCartId, setShoppingCartId] = useState(null);

  const updateShoppingCartId = (cartId) => {
    setShoppingCartId(cartId);
  };

  return (
    <ShoppingCartContext.Provider value={{ shoppingCartId, updateShoppingCartId}}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);
