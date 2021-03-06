import filterReducer from '../../reducers/filter';

describe('filtersReducer', () => {
  let state;
  beforeEach(() => {
    state = '';
  });

  test('it should return empty string if filterText is "All"', () => {
    const action = {
      type: 'CHANGE_FILTER',
      filterText: 'All',
    };
    expect(filterReducer(state, action)).toBe('');
  });

  test('it should return a new filter text', () => {
    const filterText = 'book';
    const action = {
      type: 'CHANGE_FILTER',
      filterText,
    };
    expect(filterReducer(state, action)).toBe(filterText);
  });
});
