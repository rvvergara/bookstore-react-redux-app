import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import categories from '../data/bookCategories';

const BooksForm = () => {
  return (
    <form>
      <input type="text"/>
      <select>
        {
          categories.map(category => (
            <option
              key={category}
              value={category}
            >
              { category }
            </option>
          ))
        }
      </select>
      <button 
        type="submit"      
      >
        Add Book
      </button>
    </form>
  )
};

export default BooksForm;
