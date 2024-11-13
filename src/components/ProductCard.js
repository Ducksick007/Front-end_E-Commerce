// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <div className="card shadow-sm border-light rounded">
      <img src={product.image} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-primary">${product.price}</p>
        <button
          className="btn btn-primary w-10"
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
