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
        }));
        dispatch(listSearchResults(getUnique(resultsData, 'id')));
      })
      .catch((err) => {
        const { errors } = err.response.data.error;
        dispatch(setErrors(errors.map(error => error.message)));
      });
  }
};
