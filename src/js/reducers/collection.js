import {
  ADD_BOOK, REMOVE_BOOK, SET_COLLECTION, UPDATE_PAGE,
} from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case SET_COLLECTION:
      return action.collection;
    case ADD_BOOK:
      return [action.book, ...state];
    case REMOVE_BOOK:
      return state.filter(item => item.item_id !== action.id);
    case UPDATE_PAGE:
    {
      const { id, newPage } = action;
      const bookIndex = state.findIndex(item => item.item_id === id);
      const newState = [...state];
      newState[bookIndex] = { ...newState[bookIndex], current_page: newPage };
      return newState;
    }
    default:
      return state;
  }
};
