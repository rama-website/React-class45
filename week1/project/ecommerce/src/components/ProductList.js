// ProductList.js
import React from 'react';
import allProducts from '../fake-data/all-products';

const ProductList = ({ selectedCategory }) => {
  

  const filteredProducts = selectedCategory
    ? allProducts.filter(
        product => product.category.toLowerCase()=== selectedCategory
      )
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
            {/* Add other product details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;


