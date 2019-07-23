import React from 'react';
import { shallow } from 'enzyme';
import { ProgressUpdateBody } from '../../components/ProgressUpdateBody';
import users from '../fixtures/users';

describe('ProgressUpdateBody', () => {
  let wrapper;
  let fetchUpdatePage;

  beforeEach(() => {
    const pagesArray = [1, 2, 3, 4, 5];
    fetchUpdatePage = jest.fn(() => Promise.resolve());
    wrapper = shallow(
      <ProgressUpdateBody
        pagesArray={pagesArray}
        item_id="someId"
        title="Some Title"
        fetchUpdatePage={fetchUpdatePage}
        username={users[0].username}
      />,
    );
  });

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should handle change in chapter', () => {
    wrapper.find('select').prop('onChange')({
      target: {
        name: 'current',
        value: '3',
      },
    });

    expect(wrapper.state('current')).toBe('3');
    expect(fetchUpdatePage).toHaveBeenLastCalledWith(users[0].username, 'someId', '3');
  });
});
