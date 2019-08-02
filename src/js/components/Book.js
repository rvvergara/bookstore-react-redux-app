import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NProgress from 'nprogress';
import { addBookToLibrary, fetchRemoveBook } from '../thunks/book';
import { switchAddBookMode } from '../actions/book';
import { updateSearchResult } from '../actions/search';

export const Book = ({
  book,
  addBookToLibrary,
  fetchRemoveBook,
  username,
  switchAddBookMode,
  updateSearchResult,
}) => {
  const addToCollection = () => {
    const path = `/v1/users/${username}/collection`;
    NProgress.start();
    addBookToLibrary(path, { collection_item: { book_id: book.book_id } })
      .then((res) => {
        const { item_id } = res.collection_item;
        updateSearchResult(book.book_id, item_id, true);
        switchAddBookMode({ ...book, item_id, included: true });
      })
      .then(() => NProgress.done());
  };

  const removeFromCollection = () => {
    NProgress.start();
    fetchRemoveBook(username, book.item_id, false)
      .then(() => updateSearchResult(book.book_id, null, false))
      .then(() => switchAddBookMode({ ...book, item_id: null, included: false }))
      .then(() => NProgress.done());
  };

  const addBookBtn = (
    <button
      type="button"
      className="add-book-btn"
      onClick={addToCollection}
    >
      Add To Collection
    </button>
  );

  const removeBookBtn = (
    <button
      type="button"
      className="add-book-btn"
      onClick={removeFromCollection}
    >
      Remove From Collection
    </button>
  );

  return (
    <div>
      <h2>
        {book.title}
        {' '}
        :
        {' '}
        {book.subtitle }
      </h2>
      <div>
        <img src={book.thumbnail} alt={book.title} />
      </div>
      <div>
        <h3>
        By:
          {' '}
          <small>{book.authors}</small>
        </h3>
        <h3>Description:</h3>
        <p>
          { book.description }
        </p>
        <p>
          <strong>No. of pages: </strong>
          {' '}
          {book.page_count}
        </p>
        <p>
          <strong>ISBN: </strong>
          {' '}
          {book.isbn}
        </p>
        <p>
          <strong>Publish Date: </strong>
          {' '}
          {book.published_date}
        </p>
        {book.included ? removeBookBtn : addBookBtn}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  username: state.currentUser.data.username,
  book: state.addBookMode.book,
});

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  addBookToLibrary: PropTypes.func.isRequired,
  fetchRemoveBook: PropTypes.func.isRequired,
  switchAddBookMode: PropTypes.func.isRequired,
  updateSearchResult: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

export default connect(mapStateToProps,
  {
    addBookToLibrary,
    fetchRemoveBook,
    switchAddBookMode,
    updateSearchResult,
  })(Book);
