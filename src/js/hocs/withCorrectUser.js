import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const withCorrectUser = (Component) => {
  const Allowed = ({ isAllowed, ...rest }) => (isAllowed ? <Component {...rest} /> : <Navigate to="/" />);

  const mapStateToProps = (state, ownProps) => ({
    isAllowed: state.currentUser.data.username === ownProps.match.params.id,
  });

  Allowed.propTypes = {
    isAllowed: PropTypes.bool.isRequired,
  };

  return connect(mapStateToProps)(Allowed);
};

export default withCorrectUser;
