import { combineReducers } from 'redux';
import addBookMode from './addBookMode';
import switchProgressUpdate from './switchProgressUpdate';
import books from './books';
import filter from './filter';

export default combineReducers({
  addBookMode,
  books,
  filter,
  switchProgressUpdate,
});
