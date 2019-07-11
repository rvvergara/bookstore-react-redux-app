import React from 'react';

const BookSearchResultItem = ({
  book: {
    title, subtitle, description, authors, imageLinks,
  },
}) => {
  const authorNames = authors ? authors.map(author => author).join(', ') : 'No author data';
  return (
    <div>
      <h3>
        {title}
:
        {' '}
        {subtitle}
      </h3>
      {imageLinks && (
      <div>
        <img src={imageLinks.smallThumbnail} alt={title} />
      </div>
      )}
      <h4>
By:
        {' '}
        {authorNames}
        {' '}
      </h4>
      <p>{description || 'No description'}</p>
    </div>
  );
};

export default BookSearchResultItem;
