import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../actions/currentUser';

export const LoginPage = ({ authenticate, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = (e) => {
    e.preventDefault();
    authenticate({ email_or_username: email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <form>
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

export default connect(null, { authenticate })(LoginPage);
