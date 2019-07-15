import React from 'react';
import uid from 'uuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBook, switchAddBookMode} from '../actions/book';
import { changeFilter} from '../actions/filter';
import categories from '../data/bookCategories';

export class CollectionItemForm extends React.Component {
  state = {
    title: '',
    author: '',
    chapters: '',
    category: 'Select Category',
    error: '',
  };

  handleChange = (target) =>
    this.setState(() => ({
      [target.name]: target.value,
    }));

  handleSubmit = () => {
    if(this.state.title && this.state.author && this.state.category !== 'Select Category'){this.props.addBook({
      id: uid(),
      title: this.state.title,
      author: this.state.author,
      chapters: this.state.chapters,
      category: this.state.category,
      currentChapter: '0'
    });
    this.props.changeFilter('All');
    this.props.switchAddBookMode();
    this.setState(() => ({
      title: '',
      author: '',
      chapters: '',
      category: 'Select Category',
      error: '',
    }));}else{
      this.setState(() => ({ error: 'Please enter title, author and valid category'}))
    }
  };

  render() {
    return (
      <div>
        <h2 className="add-new-title">Add new book</h2>
        {
          this.state.error && <div>{ this.state.error }</div>
        }
        <form
          className="form"
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit();
          }}
        >
          <input
            className="form-input"
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={e => this.handleChange(e.target)}
          />
          <input
            className="form-input"
            type="text"
            name="author"
            placeholder="Author"
            value={this.state.author}
            onChange={e => this.handleChange(e.target)}
          />
          <input
            className="form-input"
            type="text"
            name="chapters"
            placeholder="No. Of Chapters"
            value={this.state.chapters}
            onChange={(e) => {
              const re = /^\d+?$/gi;
              if(!e.target.value || e.target.value.match(re)) this.handleChange(e.target)
            }}
/>
          <select
            name='category'
            className="form-select"
            value={this.state.category}
            onChange={e => this.handleChange(e.target)}
          >
            {['Select Category'].concat(categories).map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button className="add-book-btn" type="submit">
            Add To Collection
          </button>
        </form>
      </div>
    );
  }
}

CollectionItemForm.propTypes = {
  addBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  switchAddBookMode: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addBook, changeFilter, switchAddBookMode },
)(CollectionItemForm);
