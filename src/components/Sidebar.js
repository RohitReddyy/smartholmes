// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h3>Product Categories</h3>
      <ul>
        <li><a href="#">Smart Doorbells</a></li>
        <li><a href="#">Smart Doorlocks</a></li>
        <li><a href="#">Smart Speakers</a></li>
        <li><a href="#">Smart Lightings</a></li>
        <li><a href="#">Smart Thermostats</a></li>
      </ul>

      <h3>About SmartHomes</h3>
      <p>
        SmartHomes is dedicated to providing high-tech smart home solutions to
        enhance security, comfort, and convenience in your home. Whether you're
        looking to upgrade with smart devices or completely automate your home,
        we’ve got the products and expertise to make it happen. <a href="#">Learn more</a>
      </p>
    </aside>
  );
}

export default Sidebar;
