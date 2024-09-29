// src/pages/Checkout.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    address: '',
    creditCard: '',
    deliveryMethod: 'home',
  });

  const handleInputChange = (e) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send order to backend or save in localStorage
    alert('Order placed successfully!');
  };

  return (
    <div>
      <h2>Checkout</h2>
      {cart.length > 0 ? (
        <form onSubmit={handleSubmit}>
          <h3>Personal Information</h3>
          <input type="text" name="name" placeholder="Name" onChange={handleInputChange} required />
          <input type="text" name="address" placeholder="Address" onChange={handleInputChange} required />
          <input type="text" name="creditCard" placeholder="Credit Card" onChange={handleInputChange} required />

          <h3>Delivery Method</h3>
          <input type="radio" name="deliveryMethod" value="home" onChange={handleInputChange} checked={customerInfo.deliveryMethod === 'home'} /> Home Delivery
          <input type="radio" name="deliveryMethod" value="pickup" onChange={handleInputChange} checked={customerInfo.deliveryMethod === 'pickup'} /> In-store Pickup

          <button type="submit">Place Order</button>
        </form>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Checkout;
