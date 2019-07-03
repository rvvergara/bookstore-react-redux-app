import React from 'react';
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
