import { combineReducers } from 'redux';
import addBookMode from './addBookMode';
import progressUpdateMode from './progressUpdateMode';
import books from './books';
import filter from './filter';
import currentUser from './user';
import error from './error';

export default combineReducers({
  addBookMode,
  books,
  filter,
  progressUpdateMode,
  currentUser,
  error,
});
