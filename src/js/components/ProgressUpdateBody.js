import React from 'react';
import PropTypes from 'prop-types';
import {connect } from 'react-redux';
import { updatePage} from '../actions/book';

export class ProgressUpdateBody extends React.Component {
  state = {
    current: this.props.current_page || "0",
  }

  handleChange = (target) => {
    const { book_id, updatePage } = this.props;
    this.setState({
      [target.name]: target.value,
    });

    updatePage(book_id, target.value);
  }

  render(){
    const { pagesArray, id, title } = this.props;
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
                key={`${id}-${page}
                `}
                id={`${id} ${page}
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
  book_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  updatePage: PropTypes.func.isRequired,
};

export default connect(null, { updatePage})(ProgressUpdateBody);
