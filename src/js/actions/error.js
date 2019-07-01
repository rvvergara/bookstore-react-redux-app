import { SET_ERROR } from './actionTypes';

export const setError = error => ({
  type: SET_ERROR,
  error,
});
