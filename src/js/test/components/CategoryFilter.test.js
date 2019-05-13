import React from 'react';
import { shallow } from 'enzyme';
import CategoryFilter from '../../components/CategoryFilter';

describe('CategoryFilter', () => {
  let wrapper;
  let filter;
  let handleChange;

  beforeEach(() => {
    filter = 'All';
    handleChange = jest.fn();
    wrapper = shallow(<CategoryFilter filter={filter} handleChange={handleChange} />);
  });

  test('it should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('handleChange should be called with new category', () => {
    const actionCategory = 'Action';
    wrapper.find('select').simulate('change', {
      target: { value: actionCategory },
    });
    expect(handleChange).toHaveBeenLastCalledWith(actionCategory);
  });
});
