import React from 'react';

const InputWrapper = ({
  setInput, inputValue, labelValue, type, inputId, error,
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

export default InputWrapper;
