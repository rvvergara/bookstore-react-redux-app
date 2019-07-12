import uuid from 'uuid';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  SWITCH_ADD_ITEM_MODE,
  SWITCH_PROGRESS_UPDATE,
  UPDATE_CHAPTER,
} from './actionTypes';


const addItem = ({
  title, author, chapters, category,
}) => ({
  type: ADD_ITEM,
  item: {
    id: uuid(),
    title,
    author,
    chapters,
    category,
    currentChapter: '0',
  },
});

const switchAddItemMode = () => ({
  type: SWITCH_ADD_ITEM_MODE,
});

const removeItem = id => ({
  type: REMOVE_ITEM,
  id,
});

const switchProgressUpdate = id => ({
  type: SWITCH_PROGRESS_UPDATE,
  id,
});

const updateChapter = (id, newChapter) => ({
  type: UPDATE_CHAPTER,
  id,
  newChapter,
});

export {
  addItem,
  removeItem,
  switchAddItemMode,
  switchProgressUpdate,
  updateChapter,
};
