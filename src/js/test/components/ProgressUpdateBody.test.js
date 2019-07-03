import React from 'react';
import { shallow } from 'enzyme';
import { ProgressUpdateBody } from '../../components/ProgressUpdateBody';

describe('ProgressUpdateBody', () => {
  let wrapper;
  let updateChapter;

  beforeEach(() => {
    const chaptersArray = [1, 2, 3, 4, 5];
    updateChapter = jest.fn();
    wrapper = shallow(
      <ProgressUpdateBody
        chaptersArray={chaptersArray}
        id="someId"
        title="Some Title"
        updateChapter={updateChapter}
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
    expect(updateChapter).toHaveBeenLastCalledWith('someId', '3');
  });
});
