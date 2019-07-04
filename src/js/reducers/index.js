import { combineReducers } from 'redux';
import addBookMode from './addBookMode';
import progressUpdateMode from './progressUpdateMode';
import books from './books';
import filter from './filter';
import currentUser from './user';
import errors from './errors';
import searchResults from './search';

export default combineReducers({
  addBookMode,
  books,
  filter,
  progressUpdateMode,
  currentUser,
  errors,
  searchResults,
});
