import { ADD_BOOK, REMOVE_BOOK, UPDATE_CHAPTER } from '../actions/actionTypes';
import books from '../data/dummyBooks';

export default (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.id);
    case UPDATE_CHAPTER:
    {
      const { id, newChapter } = action;
      const bookIndex = state.findIndex(book => book.id === id);
      const newState = [...state];
      newState[bookIndex] = { ...newState[bookIndex], currentChapter: newChapter };
      return newState;
    }
    default:
      return state;
  }
};
