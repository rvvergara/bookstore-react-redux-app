import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { switchAddItemMode } from '../actions/collection';
import Collection from './Collection';
import BooksFormModal from './BooksFormModal';

export const UserDashboard = ({ addItemMode, switchAddItemMode }) => (
  <div id="app">
    <div id="container">
      <BooksFormModal
        addItemMode={addItemMode}
        switchAddItemMode={switchAddItemMode}
      />
      <Collection />
    </div>
  </div>
);

const mapStateToProps = state => ({
  addItemMode: state.addItemMode,
});

UserDashboard.propTypes = {
  addItemMode: PropTypes.bool.isRequired,
  switchAddItemMode: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { switchAddItemMode })(UserDashboard);
