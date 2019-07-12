import { ADD_ITEM, REMOVE_ITEM, UPDATE_CHAPTER } from '../actions/actionTypes';
import books from '../data/dummyBooks';

export default (state = books, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.item];
    case REMOVE_ITEM:
      return state.filter(item => item.id !== action.id);
    case UPDATE_CHAPTER:
    {
      const { id, newChapter } = action;
      const itemIndex = state.findIndex(item => item.id === id);
      const newState = [...state];
      newState[itemIndex] = { ...newState[itemIndex], currentChapter: newChapter };
      return newState;
    }
    default:
      return state;
  }
};
