import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Use Link to navigate to the product detail page */}
      <Link to={`/product/${product.id}`} className="view-details">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
