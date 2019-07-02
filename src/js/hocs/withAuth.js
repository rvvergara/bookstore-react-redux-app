import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const withAuth = (Component, isPublic) => {
  const Authenticate = ({ isAuthenticated, ...props }) => {
    if (isPublic) {
      return (isAuthenticated ? <Redirect to="/" /> : <Component {...props} />);
    }
    return (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />);
  };

  const mapStateToProps = state => ({
    isAuthenticated: state.currentUser.authenticated,
  });

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
  };

  return connect(mapStateToProps)(Authenticate);
};

export default withAuth;
