import {
  addBook,
  removeBook,
  switchAddBookMode,
  switchProgressUpdate,
  updateChapter,
} from '../../actions/book';
import {
  ADD_BOOK, REMOVE_BOOK, SWITCH_ADD_BOOK_MODE, SWITCH_PROGRESS_UPDATE, UPDATE_CHAPTER,
} from '../../actions/actionTypes';
import books from '../fixtures/books';

describe('addBook', () => {
  test('it returns an ADD_BOOK action', () => {
    const book = { id: 'someId123', title: 'Barney', category: 'Kids' };
    const addedBook = addBook(book);
    expect(addedBook.type).toBe(ADD_BOOK);
    expect(addedBook.book.title).toBe(book.title);
    expect(addedBook.book.category).toBe(book.category);
    expect(addedBook.book.id).toEqual(expect.any(String));
  });
});

describe('removeBook', () => {
  test('it returns REMOVE_BOOK action', () => {
    const { id } = books[1];
    expect(removeBook(id)).toEqual({
      type: REMOVE_BOOK,
      id,
    });
  });
});

test('switchAddBookMode should return the right action type', () => {
  expect(switchAddBookMode()).toEqual({
    type: SWITCH_ADD_BOOK_MODE,
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
