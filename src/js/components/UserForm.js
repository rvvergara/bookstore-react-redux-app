import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { signUp, updateAccount } from '../thunks/user';
import { setError } from '../actions/error';
import InputWrapper from './InputWrapper';

export const UserForm = ({
  signUp, error, setError, isAuthenticated, userData, updateAccount,
}) => {
  const [username, setUsername] = useState(userData ? userData.username : '');
  const [email, setEmail] = useState(userData ? userData.email : '');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [firstName, setFirstName] = useState(userData ? userData.first_name : '');
  const [lastName, setLastName] = useState(userData ? userData.last_name : '');
  const saveUser = isAuthenticated ? updateAccount : signUp;

  const removeErrorMsg = useCallback(() => {
    setError(null);
  }, [setError]);

  useEffect(() => {
    removeErrorMsg();
    return () => setError(null);
  }, [removeErrorMsg, setError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername('');
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');
    setFirstName('');
    setLastName('');
    const secureAttributes = { password, password_confirmation: passwordConfirmation };
    const profileAttributes = {
      username, email, first_name: firstName, last_name: lastName,
    };
    const userParams = password === '' ? profileAttributes : { ...profileAttributes, ...secureAttributes };
    saveUser({
      user: userParams,
    });
  };

  return (
    <div>
      <form>
        {
            error && <div className="error">{error}</div>
          }
        <InputWrapper
          inputValue={username}
          labelValue="Username: "
          setInput={setUsername}
          type="text"
          inputId="username"
        />
        <InputWrapper
          inputValue={email}
          labelValue="Email: "
          setInput={setEmail}
          type="email"
          inputId="email"
        />
        <InputWrapper
          inputValue={password}
          labelValue="Password: "
          setInput={setPassword}
          type="password"
          inputId="password"
        />
        <InputWrapper
          inputValue={passwordConfirmation}
          labelValue="Confirm Password: "
          setInput={setPasswordConfirmation}
          type="password"
          inputId="password-confirmation"
        />
        <InputWrapper
          inputValue={firstName}
          labelValue="First Name: "
          setInput={setFirstName}
          type="text"
          inputId="first-name"
        />
        <InputWrapper
          inputValue={lastName}
          labelValue="Last Name: "
          setInput={setLastName}
          type="text"
          inputId="last-name"
        />
        <div className="btn-wrapper">
          <button
            type="submit"
            className="user-form__btn"
            onClick={handleSubmit}
          >
            { isAuthenticated ? 'Update Account' : 'Create Account'}
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.error,
  isAuthenticated: state.currentUser.authenticated,
  userData: state.currentUser.data,
});

export default connect(mapStateToProps, { signUp, setError, updateAccount })(UserForm);
