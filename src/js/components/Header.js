import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../thunks/user';

export const Header = ({ logout }) => (
  <header className="panel-bg">
    <h1 className="Bookstore-CMS">Bookstore App</h1>
    <button
      type="button"
      className="btn"
      onClick={logout}
    >
      Log Out
    </button>
  </header>
);

export default connect(null, { logout })(Header);
