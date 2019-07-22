import { SWITCH_ADD_BOOK_MODE } from '../actions/actionTypes';

const defaultState = {
  on: false,
  book: null,
};

export default (state = defaultState, action) => {
  if (action.type === SWITCH_ADD_BOOK_MODE) {
    if (state.on) {
      return action.book ? { on: true, book: action.book } : { on: false, book: null };
    }
    return { on: true, book: action.book };
  }
  return state;
};
