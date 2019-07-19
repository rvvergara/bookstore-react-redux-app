import { listSearchResults } from '../actions/search';
import { setSearchTerm } from '../actions/searchTerm';
import {
  setCollection, updatePage, addBook, removeBook,
} from '../actions/book';
import { setErrors } from '../actions/errors';
import { bookListFromGoogle, bookListFromLibrary, fetchData } from '../services/api';
import getUnique from '../services/arrayProcessing';

export const searchBooks = (keyword, isAdminSearch) => (dispatch) => {
  if (isAdminSearch) {
    return bookListFromGoogle(keyword)
      .then((res) => {
        const resultsData = res.data.items.map(({ id, volumeInfo }) => ({
          id,
          ...volumeInfo,
        })).filter(book => book.imageLinks && book.description && book.authors && book.subtitle && book.categories);

        dispatch(listSearchResults(getUnique(resultsData, 'id')));
        dispatch(setSearchTerm(keyword));
      })
      .catch(() => {
        dispatch(setSearchTerm(keyword));
        dispatch(setErrors(['Cannot find book']));
        dispatch(listSearchResults([]));
      });
  }
  return bookListFromLibrary(keyword)
    .then((res) => {
      dispatch(listSearchResults(res.data.books));
    });
};

export const addBookToLibrary = (path, book) => dispatch => fetchData('post', path, book)
  .then((res) => {
    if (path.includes('users')) dispatch(addBook(res.data.collection_item));
  })
  .catch((err) => {
    dispatch(setErrors([`Book ${err.response.data.errors.book_id[0]}`]));
  });

export const fetchCollection = username => (dispatch) => {
  const path = `/v1/users/${username}/collection`;

  return fetchData('get', path)
    .then((res) => {
      dispatch(setCollection(res.data.user.collection));
    });
};

export const fetchUpdatePage = (username, id, newPage) => (dispatch) => {
  const path = `/v1/users/${username}/collection/${id}`;

  return fetchData('put', path, { current_page: newPage })
    .then(() => {
      dispatch(updatePage(id, newPage));
    });
};

export const fetchRemoveBook = (username, id) => (dispatch) => {
  const path = `/v1/users/${username}/collection/${id}`;

  return fetchData('delete', path)
    .then(() => dispatch(removeBook(id)));
};
