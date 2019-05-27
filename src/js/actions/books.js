import uuid from 'uuid';
import {
  ADD_BOOK,
  REMOVE_BOOK,
} from './actionTypes';


const addBook = ({ title, category }) => ({
  type: ADD_BOOK,
  book: {
    id: uuid(),
    title,
    category,
  },
});

const removeBook = id => ({
  type: REMOVE_BOOK,
  id,
});

export {
  addBook,
  removeBook,
};
