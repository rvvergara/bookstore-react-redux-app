import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { switchAddBookMode, removeBook, switchProgressUpdate } from '../actions/books';
import { changeFilter } from '../actions/filter';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import ProgressUpdateModal from '../components/ProgressUpdateModal';

export const BookList = (
  {
    books,
    changeFilter,
    filter,
    removeBook,
    switchAddBookMode,
    progressUpdateMode,
    switchProgressUpdate,
  },
) => (
  <div>
    <ProgressUpdateModal
      progressUpdateMode={progressUpdateMode}
      switchProgressUpdate={switchProgressUpdate}
    />
    <div className="booklist-controls">
      <CategoryFilter
        filter={filter}
        handleChange={optionValue => changeFilter(optionValue)}
      />
      <button
        className="add-book-btn btn-sm"
        type="button"
        onClick={switchAddBookMode}
      >
          Add Book
      </button>
    </div>
    <div>
      {books.map(book => (
        <Book
          key={book.id}
          book={book}
          handleRemove={id => removeBook(id)}
        />
      ))}
    </div>
  </div>
);

const mapStateToProps = state => ({
  books: state.books.filter(book => (state.filter === '' ? true : book.category === state.filter)),
  filter: state.filter,
  progressUpdateMode: state.progressUpdateMode,
});

BookList.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  switchAddBookMode: PropTypes.func.isRequired,
  progressUpdateMode: PropTypes.instanceOf(Object).isRequired,
  switchProgressUpdate: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  {
    removeBook, changeFilter, switchAddBookMode, switchProgressUpdate,
  },
)(BookList);
