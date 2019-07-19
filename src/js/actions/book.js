import {
  ADD_BOOK,
  REMOVE_BOOK,
  SET_COLLECTION,
  SWITCH_ADD_BOOK_MODE,
  SWITCH_PROGRESS_UPDATE,
  UPDATE_PAGE,
} from './actionTypes';

const setCollection = collection => ({
  type: SET_COLLECTION,
  collection,
});

const addBook = book => ({
  type: ADD_BOOK,
  book,
});

const switchAddBookMode = book => ({
  type: SWITCH_ADD_BOOK_MODE,
  book,
});

const removeBook = id => ({
  type: REMOVE_BOOK,
  id,
});

const switchProgressUpdate = id => ({
  type: SWITCH_PROGRESS_UPDATE,
  id,
});

const updatePage = (id, newPage) => ({
  type: UPDATE_PAGE,
  id,
  newPage,
});

export {
  addBook,
  removeBook,
  setCollection,
  switchAddBookMode,
  switchProgressUpdate,
  updatePage,
};
