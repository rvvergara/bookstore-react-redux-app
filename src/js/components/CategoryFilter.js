import React from 'react';
import categories from '../data/bookCategories';

const CategoryFilter = () => (
  <select>
  {
    ["All"].concat(categories).map(category => (
      <option
        key={category}
        value={category}
      >
        { category }
      </option>
    ))
  }
</select>
);

export default CategoryFilter;