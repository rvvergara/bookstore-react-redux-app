import { combineReducers } from 'redux';
import addBookMode from './addBookMode';
import books from './books';
import filter from './filter';

export default combineReducers({
  addBookMode,
  books,
  filter,
});
