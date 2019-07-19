import React from 'react';
import PropTypes from 'prop-types';
import Progress from './Progress';
import CurrentChapter from './CurrentChapter';
import ProgressUpdateBtn from './ProgressUpdateBtn';
import 'react-circular-progressbar/dist/styles.css';

const CollectionItem = (props) => {
  const { handleRemove, item } = props;
  const {
    book_id, title, author, category, chapters, currentChapter,
  } = item;

  return (
    <div className="card">
      <div className="card-body">
        <div className="columns">
          <div className="book-info">
            <h4 className="genre">{category}</h4>
            <h3 className="title">{title}</h3>
            <p>
              by:&nbsp;
              {author}
            </p>
            <div className="action">
              <button className="btn btn-link" type="button" onClick={() => handleRemove(book_id)}>
                Remove
              </button>
            </div>
          </div>
          <div className="progress">
            <Progress
              currentChapter={Number(currentChapter)}
              chapters={Number(chapters)}
            />
          </div>
          <div className="chapter-info">
            <CurrentChapter currentChapter={currentChapter} />
            <ProgressUpdateBtn id={item.book_id} />
          </div>
        </div>
      </div>
    </div>
  );
};

CollectionItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default CollectionItem;
