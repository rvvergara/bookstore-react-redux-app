import { CHANGE_FILTER } from './actionTypes';

export const changeFilter = filterText => ({
  type: CHANGE_FILTER,
  filterText,
});
