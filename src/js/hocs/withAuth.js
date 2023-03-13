import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const WithAuth = (Component) => {
  const Authenticate = ({ isAuthenticated, ...props }) => {
    return isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />;
  };

  const mapStateToProps = (state) => ({
    isAuthenticated: state.currentUser.authenticated,
  });

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
  };

  return connect(mapStateToProps)(Authenticate);
};

export default WithAuth;
