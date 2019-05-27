import uuid from 'uuid';
import {
  ADD_BOOK,
  REMOVE_BOOK,
  SWITCH_ADD_BOOK_MODE,
} from './actionTypes';


const addBook = ({ title, category }) => ({
  type: ADD_BOOK,
  book: {
    id: uuid(),
    title,
    category,
  },
});

const switchAddBookMode = () => ({
  type: SWITCH_ADD_BOOK_MODE,
});

const removeBook = id => ({
  type: REMOVE_BOOK,
  id,
});

export {
  addBook,
  removeBook,
  switchAddBookMode,
};
