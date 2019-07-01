import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

describe('App component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
