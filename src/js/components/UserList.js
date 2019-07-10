import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../thunks/user';
import { listUsers } from '../actions/user';
import UserPanel from './UserPanel';

export const UserList = ({
  users, fetchUsers, listUsers, currentUser,
}) => {
  useEffect(() => {
    fetchUsers();
    return () => listUsers([]);
  }, [fetchUsers, listUsers]);

  return users.filter(user => user.id !== currentUser.id).map(user => <UserPanel key={user.id} user={user} />);
};

const mapStateToProps = state => ({
  users: state.users,
  currentUser: state.currentUser.data,
});

export default connect(mapStateToProps, { fetchUsers, listUsers })(UserList);
