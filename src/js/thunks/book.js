import { listSearchResults } from '../actions/search';
import { setSearchTerm } from '../actions/searchTerm';
import { setErrors } from '../actions/errors';
import { bookListFromGoogle, fetchData } from '../services/api';
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
};

export const addBookToLibrary = book => (dispatch) => {
  const path = '/v1/books';
  return fetchData('post', path, book)
    .then((res) => {
      console.log(res.data);
    })
    .catch(err => console.log(err));
};
