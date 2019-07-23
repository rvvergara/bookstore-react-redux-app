import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Switch from 'react-switch';
import { updateAccount, fetchUsers } from '../thunks/user';

export const UserPanel = ({
  user,
  updateAccount,
  currentUserLevel,
  fetchUsers,
}) => {
  const {
    id, username, first_name, last_name, access_level,
  } = user;
  const [checked, setChecked] = useState(access_level > 1);

  const handleChange = () => {
    const level = checked ? 1 : 2;
    setChecked(!checked);
    updateAccount({ user: { access_level: level, username }, id })
      .then(() => fetchUsers());
  };
  const badge = (level) => {
    switch (level) {
      case 2:
        return 'Curator';
      case 3:
        return 'Owner';
      default:
        return 'User';
    }
  };

  return (
    <div className="user-panel">
      <div className="user-panel__details">
        <h3>{`${first_name} ${last_name}`}</h3>
        <p>{ badge(access_level) }</p>
      </div>
      {currentUserLevel > 2 && (
      <div className="user-panel__access-switch">
        <label htmlFor={`normal-switch-${id}`}>
          <span>User is admin?</span>
          <Switch
            onChange={handleChange}
            checked={checked}
            className="react-switch"
            id={`normal-switch-${id}`}
          />
        </label>
      </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUserLevel: state.currentUser.data.access_level,
});

UserPanel.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  updateAccount: PropTypes.func.isRequired,
  currentUserLevel: PropTypes.number.isRequired,
  fetchUsers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { updateAccount, fetchUsers })(UserPanel);
