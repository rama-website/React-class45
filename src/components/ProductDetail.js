//ProductDetails.js

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FavoritesContext } from './context/FavoritesContext';
import heartRegularIcon from '../assets/heart-regular.svg';
import heartSolidIcon from '../assets/heart-solid.svg';

const ProductDetail = () => {
  const { id } = useParams(); // Access the 'id' parameter from the URL
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return null;
  }

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
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
      
    </div>
  );
};

export default ProductDetail;
