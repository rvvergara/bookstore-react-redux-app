import { testNameToKey } from 'jest-snapshot/build/utils';
import booksReducer from '../../reducers/books';
import books from '../fixtures/books';
import { UPDATE_CHAPTER } from '../../actions/actionTypes';

let bookState;

beforeEach(() => {
  bookState = books;
});

test('it should return default state', () => {
  const action = {
    type: 'CHANGE_FILTER',
    filterText: 'Cow',
  };
  expect(booksReducer(bookState, action)).toEqual(bookState);
});

test('it should add new book', () => {
  const action = {
    type: 'ADD_BOOK',
    book: {
      title: 'In Praise of Folly',
      category: 'Comedy',
    },
  };
  expect(booksReducer(bookState, action)).toEqual([...bookState, action.book]);
});

test('it should remove an existing book', () => {
  const action = { type: 'REMOVE_BOOK', id: '0' };
  expect(booksReducer(bookState, action)).toEqual(bookState.slice(1));
});

test('it should update current chapter of selected book', () => {
  const action = {
    type: UPDATE_CHAPTER,
    id: bookState[1].id,
    newChapter: '15',
  };
  expect(booksReducer(bookState, action)[1].currentChapter).toBe('15');
});
