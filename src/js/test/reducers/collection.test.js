import collectionReducer from '../../reducers/collection';
import books from '../fixtures/books';
import { UPDATE_PAGE } from '../../actions/actionTypes';

let collectionState;

beforeEach(() => {
  collectionState = books;
});

test('it should return default state', () => {
  const action = {
    type: 'CHANGE_FILTER',
    filterText: 'Cow',
  };
  expect(collectionReducer(collectionState, action)).toEqual(collectionState);
});

test('it should add new book', () => {
  const action = {
    type: 'ADD_BOOK',
    item: {
      title: 'In Praise of Folly',
      category: 'Comedy',
    },
  };
  expect(collectionReducer(collectionState, action)).toEqual([...collectionState, action.book]);
});

test('it should remove an existing book', () => {
  const action = { type: 'REMOVE_BOOK', id: '0' };
  expect(collectionReducer(collectionState, action)).toEqual(collectionState.slice(1));
});

test('it should update current page of selected book', () => {
  const action = {
    type: UPDATE_PAGE,
    id: collectionState[1].id,
    newPage: '15',
  };
  expect(collectionReducer(collectionState, action)[1].current_page).toBe('15');
});
