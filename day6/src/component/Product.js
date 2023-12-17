// Product.js
import React from 'react';
import img1 from './img1.webp';
const Product = ({ product, onAddToCart }) => {
  return (
    <div>
        <img src={img1} alt="img1"/>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
