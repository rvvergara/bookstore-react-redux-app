import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilters } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BookList = (props) => {
  const {
    books,
    changeFilters,
    filter,
    removeBook,
  } = props;
  return (
    <div>
      <CategoryFilter
        filter={filter}
        handleChange={optionValue => changeFilters(optionValue)}
      />
      <table>
        <thead>
          <tr>
            <th>BOOK ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <Book
              key={book.id}
              book={book}
              handleRemove={id => removeBook(id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books.filter(book => (state.filter === '' ? true : book.category === state.filter)),
  filter: state.filter,
});

BookList.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
  changeFilters: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  { removeBook, changeFilters },
)(BookList);
