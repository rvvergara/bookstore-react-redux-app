import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../thunks/user';
import InputWrapper from './InputWrapper';

export const LoginPage = ({
  login,
  errors,
  history,
}) => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(errors ? errors.message : errors);

  const loginUser = (e) => {
    e.preventDefault();
    setEmailOrUsername('');
    setPassword('');
    login({ email_or_username: emailOrUsername, password })
      .then(() => {
        history.push('/');
      })
      .catch(() => setErrorMessage(errors));
  };

  return (
    <div>
      <div className="form-wrapper">
        <form className="form user-form">
          {errors && <div className="error">{errorMessage}</div>}
          <InputWrapper
            inputValue={emailOrUsername}
            labelValue="Username/Email:"
            setInput={setEmailOrUsername}
            type="text"
            inputId="email"
          />
          <InputWrapper
            inputValue={password}
            labelValue="Password:"
            setInput={setPassword}
            type="password"
            inputId="password"
          />
          <div className="btn-wrapper">
            <button
              type="submit"
              className="user-form__btn"
              onClick={loginUser}
            >
              Login
            </button>
            <button
              type="button"
              className="user-form__btn"
              onClick={() => history.push('/signup')}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  errors: state.errors,
});

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.instanceOf(Object),
  history: PropTypes.instanceOf(Object).isRequired,
};

LoginPage.defaultProps = {
  errors: null,
};

export default connect(
  mapStateToProps,
  { login },
)(LoginPage);
