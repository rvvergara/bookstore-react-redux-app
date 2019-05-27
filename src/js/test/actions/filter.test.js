import { changeFilter } from '../../actions/filter';

describe('changeFilters', () => {
  test('it returns CHANGE_FILTER action', () => {
    const filterText = 'Cool';
    expect(changeFilter(filterText)).toEqual({
      type: 'CHANGE_FILTER',
      filterText,
    });
  });
});
