// ProductList.js
import '../index.css';
import React from 'react';
import allProducts from '../fake-data/all-products';

const ProductList = ({ selectedCategory }) => {
  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? allProducts.filter(product => product.category === selectedCategory)
    : allProducts;

  return (
    <div className="product-list-container">
      <h2>Products</h2>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            {/* Display other product details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
