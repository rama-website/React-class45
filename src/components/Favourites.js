import React, { useContext, useEffect, useState } from 'react';
import { FavoritesContext } from './context/FavoritesContext';
import axios from 'axios'

const Favourites = () => {
  const { favorites } = useContext(FavoritesContext);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      setLoading(true);
      setError('');

      try {
        const productsPromises = favorites.map((productId) =>
          axios.get(`https://fakestoreapi.com/products/${productId}`)
        );

        const productsData = await Promise.all(productsPromises);
        const favoriteProductsData = productsData.map((res) => res.data);

        setFavoriteProducts(favoriteProductsData);
        setLoading(false);
      } catch (error) {
        setError('Error fetching favorite products');
        setLoading(false);
      }
    };

    if (favorites.length > 0) {
      fetchFavoriteProducts();
    } else {
      setFavoriteProducts([]);
      setLoading(false);
    }
  }, [favorites]);

  if (loading) {
    return <p>Loading favorite products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="favorite-products">
      <h2>Favorites</h2>
      <ul>
        {favoriteProducts.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>Price: ${product.price}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
