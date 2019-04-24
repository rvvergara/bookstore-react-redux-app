import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const BooksForm = () => {
  const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
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
