import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="shopping-cart">
      <h3>Your Cart</h3>
      {cart.map(item => (
        <div key={item.id}>
          <span>{item.name} - ${item.price}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
