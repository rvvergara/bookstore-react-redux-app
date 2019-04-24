import React from 'react';
import PropTypes from 'prop-types';
import categories from '../data/bookCategories';

const CategoryFilter = (props) => {
  const {
    filter,
    handleChange,
  } = props;
  return (
    <select
      value={filter}
      onChange={e => handleChange(e.target.value)}
    >
      {
    ['All'].concat(categories).map(category => (
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
};

CategoryFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
