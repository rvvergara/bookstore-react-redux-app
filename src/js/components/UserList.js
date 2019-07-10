import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../thunks/user';
import { listUsers } from '../actions/user';

export const UserList = ({ users, fetchUsers, listUsers }) => {
  useEffect(() => {
    fetchUsers();
    return () => listUsers([]);
  }, [fetchUsers, listUsers]);

  return users.map(user => <div key={user.id}>{user.username}</div>);
};

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps, { fetchUsers, listUsers })(UserList);
