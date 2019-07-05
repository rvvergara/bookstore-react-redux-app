import React from 'react';

const BookSearchResultItem = ({
  book: {
    title, subtitle, description, authors,
  },
}) => (
  <div>
    <h3>{title}</h3>
    <h5>{subtitle}</h5>
    <h4>
By:
      {' '}
      {authors}
      {' '}
    </h4>
    <p>{description || 'No description'}</p>
  </div>
);

export default BookSearchResultItem;
