import React from 'react';
import { shallow } from 'enzyme';
import InputWrapper from '../../components/InputWrapper';

describe('InputWrapper component', () => {
  test('should render correctly', () => {
    const setInput = jest.fn();
    const wrapper = shallow(
      <InputWrapper
        setInput={setInput}
        inputValue=""
        labelValue="Email/Username:"
        type="text"
        inputId="email"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
