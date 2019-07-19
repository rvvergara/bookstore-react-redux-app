import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  switchAddBookMode, removeBook, switchProgressUpdate,
} from '../actions/book';
import { changeFilter } from '../actions/filter';
import CollectionItem from './CollectionItem';
import CategoryFilter from './CategoryFilter';
import ProgressUpdateModal from './ProgressUpdateModal';
import { fetchCollection } from '../thunks/book';

export const Collection = (
  {
    collection,
    itemForProgressUpdate,
    changeFilter,
    filter,
    removeBook,
    switchAddBookMode,
    progressUpdateMode,
    switchProgressUpdate,
    fetchCollection,
    username,
  },
) => {
  useEffect(() => {
    if (collection.length === 0) fetchCollection(username);
  }, [fetchCollection, username]);

  return (
    <div>
      {progressUpdateMode.on && (
      <ProgressUpdateModal
        itemForProgressUpdate={itemForProgressUpdate}
        progressUpdateMode={progressUpdateMode}
        switchProgressUpdate={switchProgressUpdate}
      />
      )}
      <div className="booklist-controls">
        <CategoryFilter
          filter={filter}
          handleChange={optionValue => changeFilter(optionValue)}
        />
        <button
          className="add-book-btn btn-sm"
          type="button"
          onClick={switchAddBookMode}
        >
          Add To Collection
        </button>
      </div>
      <div>
        {collection.map(item => (
          <CollectionItem
            key={item.book_id}
            item={item}
            handleRemove={id => removeBook(id)}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  collection: state.collection.filter(item => (state.filter === '' ? true : item.category === state.filter)),
  itemForProgressUpdate: state.collection.find(({ book_id }) => state.progressUpdateMode.id === book_id) || {},
  filter: state.filter,
  progressUpdateMode: state.progressUpdateMode,
  username: state.currentUser.data.username,
});

Collection.propTypes = {
  collection: PropTypes.instanceOf(Object).isRequired,
  itemForProgressUpdate: PropTypes.instanceOf(Object).isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  switchAddBookMode: PropTypes.func.isRequired,
  progressUpdateMode: PropTypes.instanceOf(Object).isRequired,
  switchProgressUpdate: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  {
    removeBook,
    changeFilter,
    switchAddBookMode,
    switchProgressUpdate,
    fetchCollection,
  },
)(Collection);
