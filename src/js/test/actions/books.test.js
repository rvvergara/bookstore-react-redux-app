import {
  addBook,
  removeBook,
} from '../../actions/books';
import books from '../fixtures/books';

describe('addBook', () => {
  test('it returns an ADD_BOOK action', () => {
    const book = { title: 'Barney', category: 'Kids' };
    const addedBook = addBook(book);
    expect(addedBook.type).toBe('ADD_BOOK');
    expect(addedBook.book.title).toBe(book.title);
    expect(addedBook.book.category).toBe(book.category);
    expect(addedBook.book.id).toEqual(expect.any(String));
  });
});

describe('removeBook', () => {
  test('it returns REMOVE_BOOK action', () => {
    const { id } = books[1];
    expect(removeBook(id)).toEqual({
      type: 'REMOVE_BOOK',
      id,
    });
  });
});
