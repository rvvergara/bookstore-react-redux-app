import { listSearchResults } from '../actions/search';
import { setSearchTerm } from '../actions/searchTerm';
import { setCollection } from '../actions/book';
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
        })).filter(book => book.imageLinks && book.description && book.authors && book.subtitle);

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

export const addBookToLibrary = book => (dispatch) => {
  const path = '/v1/books';
  return fetchData('post', path, book)
    .then((res) => {
      console.log(res.data);
    })
    .catch(err => console.log(err));
};

export const fetchCollection = username => (dispatch) => {
  const path = `/v1/users/${username}/collection`;

  return fetchData('get', path)
    .then((res) => {
      dispatch(setCollection(res.data.user.collection));
    });
};
