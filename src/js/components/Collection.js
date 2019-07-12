import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { switchAddItemMode, removeItem, switchProgressUpdate } from '../actions/item';
import { changeFilter } from '../actions/filter';
import CollectionItem from './CollectionItem';
import CategoryFilter from './CategoryFilter';
import ProgressUpdateModal from './ProgressUpdateModal';

export const Collection = (
  {
    collection,
    itemForProgressUpdate,
    changeFilter,
    filter,
    removeItem,
    switchAddItemMode,
    progressUpdateMode,
    switchProgressUpdate,
  },
) => (
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
        onClick={switchAddItemMode}
      >
          Add To Collection
      </button>
    </div>
    <div>
      {collection.map(item => (
        <CollectionItem
          key={item.id}
          item={item}
          handleRemove={id => removeItem(id)}
        />
      ))}
    </div>
  </div>
);

const mapStateToProps = state => ({
  collection: state.collection.filter(item => (state.filter === '' ? true : item.category === state.filter)),
  itemForProgressUpdate: state.collection.find(({ id }) => state.progressUpdateMode.id === id) || {},
  filter: state.filter,
  progressUpdateMode: state.progressUpdateMode,
});

Collection.propTypes = {
  collection: PropTypes.instanceOf(Object).isRequired,
  itemForProgressUpdate: PropTypes.instanceOf(Object).isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
  switchAddItemMode: PropTypes.func.isRequired,
  progressUpdateMode: PropTypes.instanceOf(Object).isRequired,
  switchProgressUpdate: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  {
    removeItem, changeFilter, switchAddItemMode, switchProgressUpdate,
  },
)(Collection);
