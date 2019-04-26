import React from 'react';
import PropTypes from 'prop-types';
import Progress from '../containers/Progress';
import CurrentChapter from './CurrentChapter';
import ProgressUpdateBtn from './ProgressUpdateBtn';
import 'react-circular-progressbar/dist/styles.css';

const Book = (props) => {
  const { handleRemove, book } = props;
  const { id, title, category } = book;

  return (
    <div className="card">
      <div className="card-body">
        <div className="columns">
          <div className="book-info">
            <h4 className="genre">{category}</h4>
            <h3 className="title">{title}</h3>
            <div className="action">
              <button className="btn btn-link" type="button" onClick={() => handleRemove(id)}>
                Remove
              </button>
            </div>
          </div>
          <div className="progress">
            <Progress />
          </div>
          <div className="chapter-info">
            <CurrentChapter />
            <ProgressUpdateBtn />
          </div>
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
