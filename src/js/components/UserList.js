import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NProgress from 'nprogress';
import { fetchUsers } from '../thunks/user';
import { listUsers } from '../actions/user';
import UserPanel from './UserPanel';

export const UserList = ({
  users,
  fetchUsers,
  listUsers,
  currentUser,
}) => {
  useEffect(() => {
    NProgress.start();
    fetchUsers().then(() => NProgress.done());
    return () => listUsers([]);
  }, [fetchUsers, listUsers]);

  return users.filter(user => user.id !== currentUser.id).map(user => <UserPanel key={user.id} user={user} />);
};

const mapStateToProps = state => ({
  users: state.users,
  currentUser: state.currentUser.data,
});

UserList.propTypes = {
  users: PropTypes.instanceOf(Object).isRequired,
  fetchUsers: PropTypes.func.isRequired,
  listUsers: PropTypes.func.isRequired,
  currentUser: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, { fetchUsers, listUsers })(UserList);
