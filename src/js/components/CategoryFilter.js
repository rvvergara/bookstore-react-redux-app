import React from 'react';
import categories from '../data/bookCategories';

const CategoryFilter = (props) => (
  <select
    value={props.filter}
    onChange={e => props.handleChange(e.target.value)}
  >
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