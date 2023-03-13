import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import NProgress from 'nprogress';
import { logout } from '../thunks/user';
import history from '../services/history';

export const Header = ({ logout, currentUser }) => {
  const handleLogOut = () => {
    NProgress.start();
    logout().then(() => NProgress.done());
  };

  const navigate = useNavigate();
  const pushButton = () => {
    if (currentUser.authenticated) {
      handleLogOut();
    } else {
        console.log("HELLO THERE");
      navigate('/login');
    }
  };

  return (
    <header className="panel-bg">
      <h1 className="bookstore-cms">
        <Link to="/">Bookstore App</Link>
      </h1>
      <div className="user-wrapper">
        {currentUser.authenticated && (
        <span>
          <NavLink
            to={`/users/${currentUser.data.username}`}
            activeClassName="active"
          >
            {currentUser.data.first_name}
            {' '}
            {currentUser.data.last_name}
          </NavLink>
        </span>
        )}
        {currentUser.authenticated && currentUser.data.access_level > 1 && (
        <NavLink
          className="logout-btn"
          activeClassName="active"
          to="/admin"
        >
        Admin Dashboard
        </NavLink>
        )}
        <button
          type="button"
          className="logout-btn"
          onClick={pushButton}
        >
          {currentUser.authenticated ? 'Log Out' : 'Log In'}
        </button>
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps, { logout })(Header);
