// src/pages/OrderConfirmation.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderConfirmation = () => {
  const { state } = useLocation();
  const confirmationNumber = Math.random().toString(36).substr(2, 9);
  const orderDate = new Date();
  const deliveryDate = new Date(orderDate);
  deliveryDate.setDate(orderDate.getDate() + 14);  // 2 weeks later

  return (
    <div>
      <h2>Order Confirmation</h2>
      <p>Thank you for your order!</p>
      <p>Your confirmation number is: {confirmationNumber}</p>
      <p>Estimated delivery/pickup date: {deliveryDate.toDateString()}</p>
    </div>
  );
};

export default OrderConfirmation;
