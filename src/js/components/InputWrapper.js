import React from 'react';
import PropTypes from 'prop-types';

const InputWrapper = ({
  setInput,
  inputValue,
  labelValue,
  type,
  inputId,
  error,
}) => (
  <div className="input-wrapper">
    <label
      htmlFor={inputId}
      className="user-form__label"
    >
      { labelValue }
      {' '}
      {error}
    </label>
    {type !== 'textarea' && (
    <input
      type={type}
      id={inputId}
      className="form-input"
      value={inputValue}
      onChange={e => setInput(e.target.value)}
    />
    )}
    {
      type === 'textarea' && (
        <textarea
          id={inputId}
          className="form-input"
          value={inputValue}
          onChange={e => setInput(e.target.value)}
        />
      )
    }
  </div>
);

InputWrapper.propTypes = {
  setInput: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  labelValue: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  error: PropTypes.instanceOf(Object),
};

InputWrapper.defaultProps = {
  error: null,
};

export default InputWrapper;
