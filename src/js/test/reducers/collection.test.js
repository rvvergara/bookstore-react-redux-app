import collectionReducer from '../../reducers/collection';
import books from '../fixtures/books';
import { UPDATE_CHAPTER } from '../../actions/actionTypes';

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

test('it should add new item', () => {
  const action = {
    type: 'ADD_ITEM',
    item: {
      title: 'In Praise of Folly',
      category: 'Comedy',
    },
  };
  expect(collectionReducer(collectionState, action)).toEqual([...collectionState, action.item]);
});

test('it should remove an existing item', () => {
  const action = { type: 'REMOVE_ITEM', id: '0' };
  expect(collectionReducer(collectionState, action)).toEqual(collectionState.slice(1));
});

test('it should update current chapter of selected item', () => {
  const action = {
    type: UPDATE_CHAPTER,
    id: collectionState[1].id,
    newChapter: '15',
  };
  expect(collectionReducer(collectionState, action)[1].currentChapter).toBe('15');
});
