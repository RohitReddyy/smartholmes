// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
    <div className="container">
      <Header />
      <div className="content">
        <Sidebar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

      </div>
    </div>
    </Router>
  );
}

export default App;
