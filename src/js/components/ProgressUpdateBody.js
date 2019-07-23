import React from 'react';
import PropTypes from 'prop-types';
import {connect } from 'react-redux';
import { fetchUpdatePage } from '../thunks/book';

export class ProgressUpdateBody extends React.Component {
  state = {
    current: this.props.current_page || "0",
  }

  handleChange = (target) => {
    const { item_id, fetchUpdatePage, username } = this.props;
    this.setState({
      [target.name]: target.value,
    });
    const newPage = target.value === "Not started" ? '0' : target.value;
    fetchUpdatePage(username, item_id, newPage);
  }

  render(){
    const { pagesArray, item_id, title } = this.props;
    const { current} = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <strong>Now reading page: </strong>
        <select
          name="current"
          value={current}
          onChange={e => this.handleChange(e.target)}
        >
          {
            ['Not started', ...pagesArray].map(page => (
              <option
                value={page}
                key={`${item_id}-${page}
                `}
                id={`${item_id} ${page}
                `}
              >
                {page}
              </option>
            ))
          }
        </select>
      </div>
    )
  }
}

ProgressUpdateBody.propTypes = {
  pagesArray: PropTypes.instanceOf(Object).isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fetchUpdatePage: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  username: state.currentUser.data.username,
})

export default connect(mapStateToProps, { fetchUpdatePage })(ProgressUpdateBody);
