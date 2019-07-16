import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { switchAddBookMode } from '../actions/book';
import Collection from './Collection';
import CollectionItemFormModal from './CollectionItemFormModal';

export const UserDashboard = ({ addBookMode, switchAddBookMode }) => (
  <div id="app">
    <div id="container">
      <CollectionItemFormModal
        addBookMode={addBookMode}
        switchAddBookMode={switchAddBookMode}
      />
      <Collection />
    </div>
  </div>
);

const mapStateToProps = state => ({
  addBookMode: state.addBookMode,
});

UserDashboard.propTypes = {
  addBookMode: PropTypes.instanceOf(Object).isRequired,
  switchAddBookMode: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { switchAddBookMode })(UserDashboard);
