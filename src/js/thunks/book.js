import { listSearchResults } from '../actions/search';
import { setSearchTerm } from '../actions/searchTerm';
import { setErrors } from '../actions/errors';
import { bookListFromGoogle } from '../services/api';
import getUnique from '../services/arrayProcessing';

export const searchBooks = (keyword, isAdminSearch) => (dispatch) => {
  if (isAdminSearch) {
    return bookListFromGoogle(keyword)
      .then((res) => {
        const resultsData = res.data.items.map(({ id, volumeInfo }) => ({
          id,
          ...volumeInfo,
        })).filter(book => book.imageLinks && book.description && book.authors);

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

export const other = () => {};
