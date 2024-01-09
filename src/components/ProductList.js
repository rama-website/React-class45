// ProductList.js
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FavoritesContext } from './context/FavoritesContext';
import heartRegularIcon from '../assets/heart-regular.svg';
import heartSolidIcon from '../assets/heart-solid.svg';

const ProductList = ({ selectedCategory }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let url = 'https://fakestoreapi.com/products';
    if (selectedCategory) {
      url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
    }

    axios.get(url)
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching products');
        setLoading(false);
      });
  }, [selectedCategory]);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="product-list-container">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <button
              onClick={() =>
                favorites.includes(product.id)
                  ? removeFromFavorites(product.id)
                  : addToFavorites(product.id)
              }
            >
              {favorites.includes(product.id) ? (
                <img src={heartSolidIcon} alt="Favorited" />
              ) : (
                <img src={heartRegularIcon} alt="Not Favorited" />
              )}
            </button>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} className="product-image" />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;




