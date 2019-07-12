import React from 'react';
import PropTypes from 'prop-types';
import {connect } from 'react-redux';
import { updateChapter} from '../actions/collection';

export class ProgressUpdateBody extends React.Component {
  state = {
    current: this.props.currentChapter || "0",
  }

  handleChange = (target) => {
    const { id, updateChapter } = this.props;
    this.setState({
      [target.name]: target.value,
    });

    updateChapter(id, target.value);
  }

  render(){
    const { chaptersArray, id, title } = this.props;
    const { current} = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <strong>Now reading chapter: </strong>
        <select
          name="current"
          value={current}
          onChange={e => this.handleChange(e.target)}
        >
          {
            ['Not started', ...chaptersArray].map(chapter => (
              <option
                value={chapter}
                key={`${id}-${chapter}
                `}
                id={`${id} ${chapter}
                `}
              >
                {chapter}
              </option>
            ))
          }
        </select>
      </div>
    )
  }
}

ProgressUpdateBody.propTypes = {
  chaptersArray: PropTypes.instanceOf(Object).isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  updateChapter: PropTypes.func.isRequired,
};

export default connect(null, { updateChapter})(ProgressUpdateBody);
