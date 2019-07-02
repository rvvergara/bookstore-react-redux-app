import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuth = (Component, isAuthenticated) => {
  const Authenticate = ({ ...props }) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />);

  return Authenticate;
};

export default withAuth;
