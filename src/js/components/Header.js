import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../thunks/user';

export const Header = ({ logout, name }) => (
  <header className="panel-bg">
    <h1 className="bookstore-cms">Bookstore App</h1>
    <div className="user-wrapper">
      <span>
        { name }
      </span>
      <button
        type="button"
        className="logout-btn"
        onClick={logout}
      >
        Log Out
      </button>
    </div>
  </header>
);

const mapStateToProps = state => ({
  name: `${state.currentUser.data.first_name} ${state.currentUser.data.last_name}`,
});

export default connect(mapStateToProps, { logout })(Header);
