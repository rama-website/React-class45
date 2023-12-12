// CategoryList.js
import React from 'react';
import allCategories from '../fake-data/all-categories';

const CategoryList = ({ selectCategory }) => {
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {allCategories.map(category => (
          <li key={category} onClick={() => selectCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
