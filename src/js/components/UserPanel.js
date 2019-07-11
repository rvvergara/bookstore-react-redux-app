import React, { useState } from 'react';
import { connect } from 'react-redux';
import Switch from 'react-switch';
import { updateAccount } from '../thunks/user';

export const UserPanel = ({
  user: {
    id, username, first_name, last_name, access_level,
  }, updateAccount, currentUserLevel,
}) => {
  const [checked, setChecked] = useState(access_level > 1);
  const handleChange = () => {
    const level = checked ? 1 : 2;
    setChecked(!checked);
    updateAccount({ user: { access_level: level, username }, id });
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

export default connect(mapStateToProps, { updateAccount })(UserPanel);
