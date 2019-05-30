import uuid from 'uuid';
import {
  ADD_BOOK,
  REMOVE_BOOK,
  SWITCH_ADD_BOOK_MODE,
  SWITCH_PROGRESS_UPDATE,
} from './actionTypes';


const addBook = ({
  title, author, chapters, category,
}) => ({
  type: ADD_BOOK,
  book: {
    id: uuid(),
    title,
    author,
    chapters,
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

const switchProgressUpdate = id => ({
  type: SWITCH_PROGRESS_UPDATE,
  id,
});

export {
  addBook,
  removeBook,
  switchAddBookMode,
  switchProgressUpdate,
};
