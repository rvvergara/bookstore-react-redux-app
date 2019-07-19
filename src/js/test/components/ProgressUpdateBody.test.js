import React from 'react';
import { shallow } from 'enzyme';
import { ProgressUpdateBody } from '../../components/ProgressUpdateBody';

describe('ProgressUpdateBody', () => {
  let wrapper;
  let updatePage;

  beforeEach(() => {
    const pagesArray = [1, 2, 3, 4, 5];
    updatePage = jest.fn();
    wrapper = shallow(
      <ProgressUpdateBody
        pagesArray={pagesArray}
        book_id="someId"
        title="Some Title"
        updatePage={updatePage}
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
    expect(updatePage).toHaveBeenLastCalledWith('someId', '3');
  });
});
