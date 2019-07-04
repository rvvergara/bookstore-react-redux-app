import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../thunks/user';
import history from '../services/history';

export const Header = ({ logout, currentUser }) => (
  <header className="panel-bg">
    <h1 className="bookstore-cms">Bookstore App</h1>
    <div className="user-wrapper">
      {currentUser.authenticated && (
      <span>
        { `${currentUser.data.first_name} ${currentUser.data.last_name}` }
      </span>
      )}
      {currentUser.authenticated && currentUser.data.access_level > 1 && (
      <NavLink
        className="logout-btn"
        to="/admin"
      >
        Admin Dashboard
      </NavLink>
      )}
      <button
        type="button"
        className="logout-btn"
        onClick={currentUser.authenticated ? logout : () => history.push('/login')}
      >
        {currentUser.authenticated ? 'Log Out' : 'Log In'}
      </button>
    </div>
  </header>
);

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps, { logout })(Header);
