import React from 'react';

const Book = ({ book }) => (
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
      <button
        type="button"
        className="add-book-btn"
      >
        Add To Collection
      </button>
    </div>
  </div>
);

export default Book;
