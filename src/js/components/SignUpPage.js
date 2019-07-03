import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../thunks/user';
import InputWrapper from './InputWrapper';
import Header from './Header';

const SignupPage = ({ signUp, error }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const signupUser = (e) => {
    e.preventDefault();
    setUsername('');
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');
    setFirstName('');
    setLastName('');
    signUp({
      user: {
        username,
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        password_confirmation: passwordConfirmation,
      },
    })
      .then(() => {
        console.log('User created');
      });
  };

  return (
    <div>
      <Header />
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
              onClick={signupUser}
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(mapStateToProps, { signUp })(SignupPage);
