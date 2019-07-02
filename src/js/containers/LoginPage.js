import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { login } from '../thunks/currentUser';

export const LoginPage = ({ login, error, history }) => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(error);

  useEffect(() => {
    setErrorMessage(error);
  }, [error]);

  const loginUser = (e) => {
    e.preventDefault();
    login({ email_or_username: emailOrUsername, password })
      .then(() => {
        setEmailOrUsername('');
        setPassword('');
        setErrorMessage(error);
        history.push('/');
      }).catch(() => {});
  };

  return (
    <form>
      {
        error && <div className="error">{errorMessage}</div>
      }
      <div>
        <label htmlFor="email">Username/Email:</label>
        <input
          type="email"
          id="email"
          value={emailOrUsername}
          onChange={e => setEmailOrUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        onClick={loginUser}
      >
        Login
      </button>
    </form>
  );
};

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(mapStateToProps, { login })(LoginPage);
