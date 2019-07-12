import React from 'react';
import { shallow } from 'enzyme';
import ProgressUpdateModal from '../../components/ProgressUpdateModal';
import books from '../fixtures/books';

describe('ProgressUpdateModal component', () => {
  let wrapper;
  let switchProgressUpdate;

  beforeEach(() => {
    switchProgressUpdate = jest.fn();
    wrapper = shallow(
      <ProgressUpdateModal
        itemForProgressUpdate={books[2]}
        progressUpdateMode={{ on: false, id: '' }}
        switchProgressUpdate={switchProgressUpdate}
      />,
    );
  });

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call switchProgressUpdate', () => {
    wrapper.find('button').prop('onClick')();
    expect(switchProgressUpdate).toHaveBeenCalled();
  });
});
