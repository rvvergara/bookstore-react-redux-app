import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const withAuth = (Component) => {
  const Authenticate = ({ isAuthenticated, ...props }) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />);

  const mapStateToProps = state => ({
    isAuthenticated: state.currentUser.authenticated,
  });

  return connect(mapStateToProps)(Authenticate);
};

export default withAuth;