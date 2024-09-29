import React, { createContext, useState } from 'react';

// Create the CartContext
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = product => {
    setCart([...cart, product]);
  };

  // Function to remove a product from the cart
  const removeFromCart = id => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};


