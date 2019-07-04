import { SET_ERRORS } from './actionTypes';

export const setErrors = errors => ({
  type: SET_ERRORS,
  errors,
});
