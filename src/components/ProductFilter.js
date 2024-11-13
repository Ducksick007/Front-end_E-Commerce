// src/components/ProductFilter.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByCategory, sortByPrice } from '../features/productsSlice';

const ProductFilter = () => {
  const dispatch = useDispatch();

  const handleCategoryChange = (event) => {
    dispatch(filterByCategory(event.target.value));
  };

  const handleSortChange = (event) => {
    dispatch(sortByPrice(event.target.value));
  };

  return (
    <div >
      <div className="d-flex justify-content-between">
        <select className="form-select w-auto" onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="A">CPU</option>
          <option value="B">Ram</option>
          <option value="C">Graphic Card</option>
        </select>
        <select className="form-select w-auto" onChange={handleSortChange}>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
