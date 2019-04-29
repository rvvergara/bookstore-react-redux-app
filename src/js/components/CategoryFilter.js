import React from 'react';
import PropTypes from 'prop-types';
import categories from '../data/bookCategories';

const CategoryFilter = (props) => {
  const { filter, handleChange } = props;
  return (
    <div className="category-container">
      <h2 className="filter-title">Filter category: </h2>
      <select
        className="category-select form-select"
        value={filter}
        onChange={e => handleChange(e.target.value)}
      >
        {['All', ...categories].map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
