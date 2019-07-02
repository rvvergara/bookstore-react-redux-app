import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const withAuth = (Component) => {
  const Authenticate = ({ isAuthenticated, ...props }) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />);

  const mapStateToProps = state => ({
    isAuthenticated: state.currentUser.authenticated,
  });

  return connect(mapStateToProps)(Authenticate);
};

export default withAuth;
