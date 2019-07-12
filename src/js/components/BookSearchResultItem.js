import React from 'react';
import { Link } from 'react-router-dom';

const BookSearchResultItem = ({
  book: {
    id, title, subtitle, description, authors, imageLinks,
  },
}) => {
  const authorNames = authors.map(author => author).join(', ');
  return (
    <div className="book-result-item">
      <Link
        to={`/admin/book-search/${id}`}
        target="blank"
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
          <p>{description.substr(0, 500)}</p>
        </div>
      </div>
    </div>
  );
};

export default BookSearchResultItem;
