import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../actions/currentUser';

export const LoginPage = ({ authenticate, error }) => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(error);

  useEffect(() => {
    setErrorMessage(error);
  });

  const login = (e) => {
    e.preventDefault();
    authenticate({ email_or_username: emailOrUsername, password });
    setEmailOrUsername('');
    setPassword('');
    setErrorMessage(error);
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
        onClick={login}
      >
        Login
      </button>
    </form>
  );
};

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(mapStateToProps, { authenticate })(LoginPage);
