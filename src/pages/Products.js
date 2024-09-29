import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products';  // Import your products data
import './Products.css';  // Add some styling if needed

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Normally, you would fetch this data from an API
    setProducts(productsData);
  }, []);

  return (
    <div className="products-page">
      <h1>Products</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
