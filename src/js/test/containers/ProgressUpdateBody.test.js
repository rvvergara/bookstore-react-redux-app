import React from 'react';
import { shallow } from 'enzyme';
import { ProgressUpdateBody } from '../../containers/ProgressUpdateBody';

describe('ProgressUpdateBody', () => {
  let wrapper;

  beforeEach(() => {
    const chaptersArray = [1, 2, 3, 4, 5];
    wrapper = shallow(
      <ProgressUpdateBody
        chaptersArray={chaptersArray}
        id="someId"
        title="Some Title"
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
  });
});
