import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { handleRemove, book } = props;
  const { id, title, category } = book;

  return (
    <div className="card">
      <div className="card-body">
        <div className="columns">
          <div className="col">
            <h4 className="genre">{category}</h4>
            <h3 className="title">{title}</h3>
            <div className="action">
              <button type="button" onClick={() => handleRemove(id)}>
                Remove
              </button>
            </div>
          </div>
          <div className="col" />
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Book;
