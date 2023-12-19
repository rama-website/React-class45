// App.js
import React, { useState } from 'react';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail.js';


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectCategory = category => {
    setSelectedCategory(category);
  };

  return (
    <Router>
      <div>
        <h1>E-commerce App</h1>
        
        <CategoryList onSelectCategory={handleSelectCategory} />
        
        <Routes>
          <Route exact path="/" element={<ProductList selectedCategory={selectedCategory} />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;








//Netlify URL
//https://65786fbea104856f052cd9a8--kaleidoscopic-crumble-d382ff.netlify.app/
