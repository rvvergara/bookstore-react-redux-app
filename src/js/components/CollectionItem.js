import React from 'react';
import PropTypes from 'prop-types';
import Progress from './Progress';
import CurrentChapter from './CurrentChapter';
import ProgressUpdateBtn from './ProgressUpdateBtn';
import 'react-circular-progressbar/dist/styles.css';

const CollectionItem = (props) => {
  const { handleRemove, item } = props;
  const {
    title, authors, category, page_count, current_page,
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
              {authors}
            </p>
            <div className="action">
              <button
                className="btn btn-link"
                type="button"
                onClick={handleRemove}
              >
                Remove
              </button>
            </div>
          </div>
          <div className="progress">
            <Progress
              currentPage={Number(current_page)}
              pages={Number(page_count)}
            />
          </div>
          <div className="chapter-info">
            <CurrentChapter currentPage={String(current_page)} />
            <ProgressUpdateBtn item_id={item.item_id} />
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
