import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const withAdmin = (Component) => {
  const Admin = ({ isAdmin, ...props }) => (isAdmin ? <Component {...props} /> : <Redirect to="/" />);

  const mapStateToProps = state => ({
    isAdmin: state.currentUser.data.access_level > 1,
  });

  return connect(mapStateToProps)(Admin);
};

export default withAdmin;
