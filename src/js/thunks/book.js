import { listSearchResults } from '../actions/search';
import { setErrors } from '../actions/errors';
import { bookListFromGoogle } from '../services/api';

export const searchBooks = (keyword, isAdminSearch) => (dispatch) => {
  if (isAdminSearch) {
    return bookListFromGoogle(keyword)
      .then((res) => {
        dispatch(listSearchResults(res.data.items.map(item => item.volumeInfo)));
      })
      .catch((err) => {
        const { errors } = err.response.data.error;
        dispatch(setErrors(errors.map(error => error.message)));
      });
  }
};
