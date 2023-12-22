import React, { useState } from 'react';
import CategoryList from './components/CategoryList.js';
import ProductList from './components/ProductList.js';
import './App.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectCategory = category => {
    
    setSelectedCategory(category);
  };

  return (
    <div>
      <h1>E-commerce App</h1>
      <nav>
        <CategoryList selectCategory={handleSelectCategory} />
      </nav>
      <main>
        <ProductList selectedCategory={selectedCategory} />
      </main>
    </div>
  );
};

export default App;



//Netlify URL
//https://65786fbea104856f052cd9a8--kaleidoscopic-crumble-d382ff.netlify.app/
