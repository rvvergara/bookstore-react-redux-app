import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { switchAddBookMode } from '../actions/book';

export const BookSearchResultPanel = ({
  book, switchAddBookMode,
}) => {
  const {
    title, subtitle, description, authors, imageLinks, thumbnail,
  } = book;
  const authorNames = typeof authors === 'string' ? authors : authors.map(author => author).join(', ');
  const imageLink = imageLinks ? imageLinks.smallThumbnail : thumbnail;
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
          <img src={imageLink} alt={title} />
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

BookSearchResultPanel.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  switchAddBookMode: PropTypes.func.isRequired,
};

export default connect(null, { switchAddBookMode })(BookSearchResultPanel);
