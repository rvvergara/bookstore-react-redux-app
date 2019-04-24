import React from "react";
import PropTypes from "prop-types";

const Book = props => {
  const { id, title, category } = props.book;
  const { handleRemove } = props;
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
  handleRemove: PropTypes.func.isRequired
};

export default Book;
