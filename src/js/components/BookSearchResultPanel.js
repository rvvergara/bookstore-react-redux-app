import React from 'react';
import { Link } from 'react-router-dom';

const BookSearchResultPanel = ({
  book,
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
            <Link
              to={{
                pathname: `/admin/book-search/${id}`,
                book,
              }}
              className="btn logout-btn active"
            >
              Add To Library
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookSearchResultPanel;
