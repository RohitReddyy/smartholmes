import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import './ProductDetail.css';
import { CartContext } from '../contexts/CartContext';


const ProductDetail = () => {
  const { productId } = useParams();  
  const product = products.find(p => p.id === productId); 
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      
      <h3>Accessories</h3>
      <div className="accessories">
        {product.accessories.length > 0 ? (
          product.accessories.map((accessory, index) => (
            <div key={index} className="accessory-item">
              {accessory}
            </div>
          ))
        ) : (
          <p>No accessories available</p>
        )}
      </div>

      <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
