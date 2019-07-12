import { combineReducers } from 'redux';
import addItemMode from './addItemMode';
import progressUpdateMode from './progressUpdateMode';
import collection from './collection';
import filter from './filter';
import currentUser from './currentUser';
import errors from './errors';
import searchResults from './search';
import searchTerm from './searchTerm';
import users from './users';

export default combineReducers({
  addItemMode,
  collection,
  filter,
  progressUpdateMode,
  currentUser,
  errors,
  searchResults,
  searchTerm,
  users,
});
