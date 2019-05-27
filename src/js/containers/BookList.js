import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions/books';
import { changeFilter } from '../actions/filter';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

export const BookList = (props) => {
  const {
    books, changeFilter, filter, removeBook,
  } = props;
  return (
    <div>
      <CategoryFilter
        filter={filter}
        handleChange={optionValue => changeFilter(optionValue)}
      />
      <div>
        {books.map(book => (
          <Book key={book.id} book={book} handleRemove={id => removeBook(id)} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books.filter(book => (state.filter === '' ? true : book.category === state.filter)),
  filter: state.filter,
});

BookList.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  { removeBook, changeFilter },
)(BookList);
