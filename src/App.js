// App.js

import { Link } from 'react-router-dom';

import ProductList from './components/ProductList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Favourites from './components/Favourites';
import { FavoritesProvider } from '../src/components/context/FavoritesContext'
const App = () => {
  


  return (
    <Router>
      <FavoritesProvider>
        <div>
          <h1>E-commerce App</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favourites">Favourites</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route exact path="/" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </div>
      </FavoritesProvider>
    </Router>
  );
};
export default App;







//w1
//Netlify URL
//https://65786fbea104856f052cd9a8--kaleidoscopic-crumble-d382ff.netlify.app/

//w2
//Netlify URL
//https://658571b13098fab6efd5c02f--tangerine-biscuit-d585bf.netlify.app/products/9



//Netlify URL
//https://65786fbea104856f052cd9a8--kaleidoscopic-crumble-d382ff.netlify.app/
