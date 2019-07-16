import React from 'react';
import { connect } from 'react-redux';
import { switchAddBookMode } from '../actions/book';

export const BookSearchResultPanel = ({
  book, switchAddBookMode,
}) => {
  const {
    title, subtitle, description, authors, imageLinks,
  } = book;
  const authorNames = authors.map(author => author).join(', ');
  return (
    <div className="book-result-item">
      <button
        type="button"
        className="logout-btn"
        onClick={() => switchAddBookMode(book)}
      >
        <h3>
          {title}
              :
          {' '}
          {subtitle}
        </h3>
      </button>
      <div className="book-result-item__details">
        <div className="book-result-item__image-wrapper">
          <img src={imageLinks.smallThumbnail} alt={title} />
        </div>
        <div className="book-result-item__infos">
          <h4>
            By:
            {' '}
            {authorNames}
            {' '}
          </h4>
          <p>
            {description.substr(0, 500)}
            {' '}
            <button
              type="button"
              className="logout-btn active"
              onClick={() => switchAddBookMode(book)}
            >
              Add To Library
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { switchAddBookMode })(BookSearchResultPanel);
