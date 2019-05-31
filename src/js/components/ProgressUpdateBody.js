import React from 'react';
import PropTypes from 'prop-types';

class ProgressUpdateBody extends React.Component {
  state = {
    current: this.props.currentChapter || "1",
  }

  handleChange = (target) => this.setState({
    [target.name]: target.value,
  });

  render(){
    const { chaptersArray, id, title } = this.props;
    const { current} = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <select
          name="current"
          value={current}
          onChange={e => this.handleChange(e.target)}
        >
          {
            chaptersArray.map(chapter => (
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
};

export default ProgressUpdateBody;
