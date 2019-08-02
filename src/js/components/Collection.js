import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  switchAddBookMode, switchProgressUpdate,
} from '../actions/book';
import { changeFilter } from '../actions/filter';
import CollectionItem from './CollectionItem';
import CategoryFilter from './CategoryFilter';
import ProgressUpdateModal from './ProgressUpdateModal';
import { fetchCollection, fetchRemoveBook } from '../thunks/book';
import history from '../services/history';

export const Collection = (
  {
    collection,
    itemForProgressUpdate,
    changeFilter,
    filter,
    fetchRemoveBook,
    progressUpdateMode,
    switchProgressUpdate,
    fetchCollection,
    username,
    searchTerm,
  },
) => {
  useEffect(() => {
    if (collection.length === 0) fetchCollection(username);
  }, [fetchCollection, username, collection.length]);

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
          onClick={() => history.push(`/library/search?q=${searchTerm}`)}
        >
          Add To Collection
        </button>
      </div>
      <div>
        {collection.map(item => (
          <CollectionItem
            key={item.book_id}
            item={item}
            handleRemove={() => fetchRemoveBook(username, item.item_id)}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  collection: state.collection.filter(item => (state.filter === '' ? true : item.category === state.filter)),
  itemForProgressUpdate: state.collection.find(({ item_id }) => state.progressUpdateMode.id === item_id) || {},
  filter: state.filter,
  progressUpdateMode: state.progressUpdateMode,
  username: state.currentUser.data.username,
  searchTerm: state.searchTerm,
});

Collection.propTypes = {
  collection: PropTypes.instanceOf(Object).isRequired,
  itemForProgressUpdate: PropTypes.instanceOf(Object).isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  fetchRemoveBook: PropTypes.func.isRequired,
  progressUpdateMode: PropTypes.instanceOf(Object).isRequired,
  switchProgressUpdate: PropTypes.func.isRequired,
  fetchCollection: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  {
    fetchRemoveBook,
    changeFilter,
    switchAddBookMode,
    switchProgressUpdate,
    fetchCollection,
  },
)(Collection);
