import { SWITCH_ADD_BOOK_MODE } from '../actions/actionTypes';

const defaultState = {
  on: false,
  book: null,
};

export default (state = defaultState, action) => {
  if (action.type === SWITCH_ADD_BOOK_MODE) {
    return state.on ? { on: false, book: null } : { on: true, book: action.book };
  }
  return state;
};
