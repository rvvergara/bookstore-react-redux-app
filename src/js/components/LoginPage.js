import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../thunks/user';

export const LoginPage = ({ login, error, history }) => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(error);

  const loginUser = (e) => {
    e.preventDefault();
    setEmailOrUsername('');
    setPassword('');
    login({ email_or_username: emailOrUsername, password })
      .then(() => {
        history.push('/');
      })
      .catch(() => setErrorMessage(error));
  };

  return (
    <div className="form-wrapper">
      <form className="form user-form">
        {error && <div className="error">{errorMessage}</div>}
        <div className="input-wrapper">
          <label
            htmlFor="email"
            className="user-form__label"
          >
            Username/Email:
          </label>
          <input
            type="text"
            id="email"
            className="form-input"
            value={emailOrUsername}
            onChange={e => setEmailOrUsername(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label
            htmlFor="password"
            className="user-form__label"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
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
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(
  mapStateToProps,
  { login },
)(LoginPage);
