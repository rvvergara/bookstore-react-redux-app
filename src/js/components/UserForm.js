import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUp, updateAccount } from '../thunks/user';
import history from '../services/history';
import { setErrors } from '../actions/errors';
import InputWrapper from './InputWrapper';

export const UserForm = ({
  signUp,
  errors,
  setErrors,
  isAuthenticated,
  userData,
  updateAccount,
}) => {
  const [username, setUsername] = useState(userData ? userData.username : '');
  const [email, setEmail] = useState(userData ? userData.email : '');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [firstName, setFirstName] = useState(userData ? userData.first_name : '');
  const [lastName, setLastName] = useState(userData ? userData.last_name : '');
  const saveUser = isAuthenticated ? updateAccount : signUp;

  const removeErrorMsg = useCallback(() => {
    setErrors(null);
  }, [setErrors]);

  useEffect(() => {
    removeErrorMsg();
    return () => setErrors(null);
  }, [removeErrorMsg, setErrors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const secureAttributes = { password, password_confirmation: passwordConfirmation };
    const profileAttributes = {
      username, email, first_name: firstName, last_name: lastName,
    };
    const userParamsData = password === '' ? profileAttributes : { ...profileAttributes, ...secureAttributes };
    const params = userData ? { user: userParamsData, id: userData.id } : { user: userParamsData };
    const usernameParam = isAuthenticated ? userData.username : '';
    saveUser(params, usernameParam)
      .then(() => history.push('/'))
      .catch(err => err);
  };

  return (
    <div>
      <form>
        {
            errors && <div className="error">{errors.message}</div>
          }
        <InputWrapper
          inputValue={username}
          labelValue="Username: "
          setInput={setUsername}
          type="text"
          inputId="username"
          error={errors ? errors.errors.username : null}

        />
        <InputWrapper
          inputValue={email}
          labelValue="Email: "
          setInput={setEmail}
          type="email"
          inputId="email"
          error={errors ? errors.errors.email : null}
        />
        <InputWrapper
          inputValue={password}
          labelValue="Password: "
          setInput={setPassword}
          type="password"
          inputId="password"
          error={errors ? errors.errors.password : null}

        />
        <InputWrapper
          inputValue={passwordConfirmation}
          labelValue="Confirm Password: "
          setInput={setPasswordConfirmation}
          type="password"
          inputId="password-confirmation"
          error={errors ? errors.errors.password : null}

        />
        <InputWrapper
          inputValue={firstName}
          labelValue="First Name: "
          setInput={setFirstName}
          type="text"
          inputId="first-name"
          error={errors ? errors.errors.first_name : null}

        />
        <InputWrapper
          inputValue={lastName}
          labelValue="Last Name: "
          setInput={setLastName}
          type="text"
          inputId="last-name"
          error={errors ? errors.errors.last_name : null}

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
  errors: state.errors,
  isAuthenticated: state.currentUser.authenticated,
  userData: state.currentUser.data,
});

UserForm.propTypes = {
  signUp: PropTypes.func.isRequired,
  errors: PropTypes.instanceOf(Object),
  setErrors: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  userData: PropTypes.instanceOf(Object),
  updateAccount: PropTypes.func.isRequired,
};

UserForm.defaultProps = {
  errors: null,
  userData: null,
};

export default connect(mapStateToProps, { signUp, setErrors, updateAccount })(UserForm);
