import { combineReducers } from 'redux';
import books from './books';
import filter from './filters';

export default combineReducers({
  books,
  filter,
});
