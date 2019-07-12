import {
  addItem,
  removeItem,
  switchAddItemMode,
  switchProgressUpdate,
  updateChapter,
} from '../../actions/collection';
import {
  ADD_ITEM, REMOVE_ITEM, SWITCH_ADD_ITEM_MODE, SWITCH_PROGRESS_UPDATE, UPDATE_CHAPTER,
} from '../../actions/actionTypes';
import books from '../fixtures/books';

describe('addItem', () => {
  test('it returns an ADD_ITEM action', () => {
    const item = { title: 'Barney', category: 'Kids' };
    const addedItem = addItem(item);
    expect(addedItem.type).toBe(ADD_ITEM);
    expect(addedItem.item.title).toBe(item.title);
    expect(addedItem.item.category).toBe(item.category);
    expect(addedItem.item.id).toEqual(expect.any(String));
  });
});

describe('removeItem', () => {
  test('it returns REMOVE_ITEM action', () => {
    const { id } = books[1];
    expect(removeItem(id)).toEqual({
      type: REMOVE_ITEM,
      id,
    });
  });
});

test('switchAddItemMode should return the right action type', () => {
  expect(switchAddItemMode()).toEqual({
    type: SWITCH_ADD_ITEM_MODE,
  });
});

test('switchUpdateProgress should return the right action', () => {
  expect(switchProgressUpdate('someId')).toEqual({
    type: SWITCH_PROGRESS_UPDATE,
    id: 'someId',
  });
});

test('updateChapter should return the right action', () => {
  expect(updateChapter('someId', '30')).toEqual({
    type: UPDATE_CHAPTER,
    id: 'someId',
    newChapter: '30',
  });
});
