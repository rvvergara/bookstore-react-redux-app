import React from 'react';

const BookSearchResultItem = ({
  book: {
    title, subtitle, description, authors, imageLinks,
  },
}) => {
  const authorNames = authors.map(author => author).join(', ');
  return (
    <div className="book-result-item">
      <h3>
        {title}
:
        {' '}
        {subtitle}
      </h3>
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
