import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const withCorrectUser = (Component) => {
  const Allowed = ({ isAllowed, ...rest }) => (isAllowed ? <Component {...rest} /> : <Redirect to="/" />);

  const mapStateToProps = (state, ownProps) => ({
    isAllowed: state.currentUser.data.id === ownProps.match.params.id,
  });

  Allowed.propTypes = {
    isAllowed: PropTypes.bool.isRequired,
  };

  return connect(mapStateToProps)(Allowed);
};

export default withCorrectUser;
