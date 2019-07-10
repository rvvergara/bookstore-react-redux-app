import React from 'react';

const UserPanel = ({ user: { first_name, last_name, access_level } }) => (
  <div className="user-panel">
    <div className="user-panel__details">
      <h3>{`${first_name} ${last_name}`}</h3>
      <p>{ access_level}</p>
    </div>
  </div>
);

export default UserPanel;
