// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => (
  <main className="main-content">
    <h2>Welcome to SmartHomes</h2>
    <p>
      SmartHomes is your one-stop solution for all smart home devices. We offer a wide range of products
      designed to enhance the security, convenience, and energy efficiency of your home. Our easy-to-use platform
      allows you to browse and shop for the latest smart home technologies from the comfort of your home.
    </p>

    <h3>Available Product Categories:</h3>
    <ul>
      <li>Smart Doorbells</li>
      <li>Smart Doorlocks</li>
      <li>Smart Speakers</li>
      <li>Smart Lightings</li>
      <li>Smart Thermostats</li>
    </ul>

    <h3>Why Shop with SmartHomes?</h3>
    <ul>
      <li>Wide range of smart home products</li>
      <li>Competitive pricing with special discounts and manufacturer rebates</li>
      <li>Choose between store pickup and home delivery options</li>
      <li>Secure payments via credit card</li>
      <li>Shop multiple items in the same session with an easy-to-use cart</li>
    </ul>

    <h3>Key Features:</h3>
    <ul>
      <li>Create an account online to manage orders</li>
      <li>Add, update, or cancel your orders online</li>
      <li>View associated accessories for products directly from the product page</li>
      <li>Optional warranty available for every product</li>
      <li>Receive a confirmation number for easy order tracking</li>
    </ul>

    <h3>Order and Delivery:</h3>
    <p>
      Once you place an order, you can choose between two convenient delivery options:
    </p>
    <ul>
      <li><strong>Store Pickup:</strong> Select from one of 10 store locations for pickup.</li>
      <li><strong>Home Delivery:</strong> Get your order delivered to your address within 2 weeks of purchase.</li>
    </ul>

    <p>
      For store pickup, orders can be canceled up to 5 business days before the scheduled pickup/delivery date.
      Browse through our vast selection of smart products and upgrade your home today!
    </p>

    <div className="buttons">
      <button>Explore Products</button>
      <button>Contact Us</button>
    </div>
  </main>
);

export default Home;
