import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../actions/currentUser';

export const LoginPage = ({ authenticate, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(error);

  useEffect(() => {
    setErrorMessage(error);
  });

  const login = (e) => {
    e.preventDefault();
    authenticate({ email_or_username: email, password });
    setEmail('');
    setPassword('');
    setErrorMessage(error);
  };

  return (
    <form>
      {
        error && <div>{errorMessage}</div>
      }
      <div>
        <label htmlFor="email">Username/Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
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
