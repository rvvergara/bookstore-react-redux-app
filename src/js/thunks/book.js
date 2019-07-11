import { listSearchResults } from '../actions/search';
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
      })
      .catch(() => {
        dispatch(setErrors(['Cannot find book']));
      });
  }
};

export const other = () => {};
