// CategoryList.js
import React from 'react';
import allCategories from '../fake-data/all-categories.js';

const CategoryList = ({ selectCategory }) => {
  return (
    <div>
      <h2>Categories</h2>
      <div className="category-buttons">
        {allCategories.map(category => (
          <button key={category} onClick={() => selectCategory(category.replace('FAKE: ', ''))}>
            {category.replace('FAKE: ', '')}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;


