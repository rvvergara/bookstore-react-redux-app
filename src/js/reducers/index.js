import { combineReducers } from 'redux';
import addBookMode from './addBookMode';
import progressUpdateMode from './progressUpdateMode';
import books from './books';
import filter from './filter';

export default combineReducers({
  addBookMode,
  books,
  filter,
  progressUpdateMode,
});
