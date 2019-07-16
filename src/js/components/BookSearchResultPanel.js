import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { switchAddBookMode } from '../actions/book';

export const BookSearchResultPanel = ({
  book, switchAddBookMode,
}) => {
  const {
    id, title, subtitle, description, authors, imageLinks,
  } = book;
  const authorNames = authors.map(author => author).join(', ');
  return (
    <div className="book-result-item">
      <Link
        to={{
          pathname: `/admin/book-search/${id}`,
          book,
        }}
      >
        <h3>
          {title}
            :
          {' '}
          {subtitle}
        </h3>
      </Link>
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
              className="add-book-btn"
              onClick={switchAddBookMode}
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
