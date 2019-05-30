import {
  addBook,
  removeBook,
  switchAddBookMode,
  switchUpdateProgress,
} from '../../actions/books';
import {
 ADD_BOOK, REMOVE_BOOK, SWITCH_ADD_BOOK_MODE, SWITCH_UPDATE_PROGRESS 
} from '../../actions/actionTypes';
import books from '../fixtures/books';

describe('addBook', () => {
  test('it returns an ADD_BOOK action', () => {
    const book = { title: 'Barney', category: 'Kids' };
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
  expect(switchUpdateProgress('someId')).toEqual({
    type: SWITCH_UPDATE_PROGRESS,
    id: 'someId',
  });
});
