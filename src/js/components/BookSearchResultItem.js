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
      <div>
        <img src={imageLinks.smallThumbnail} alt={title} />
      </div>
      <h4>
        By:
        {' '}
        {authorNames}
        {' '}
      </h4>
      <p>{description}</p>
    </div>
  );
};

export default BookSearchResultItem;
