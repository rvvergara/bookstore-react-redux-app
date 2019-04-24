import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addBook, changeFilters } from "../actions";
import categories from "../data/bookCategories";

class BooksForm extends React.Component {
  state = {
    title: "",
    category: "Action"
  };

  handleChange = (key, val) =>
    this.setState(() => ({
      [key]: val
    }));

  handleSubmit = () => {
    this.props.addBook({
      title: this.state.title,
      category: this.state.category
    });
    this.props.changeFilters("All");
    this.setState(() => ({
      title: "",
      category: "Action"
    }));
  };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.handleSubmit();
        }}
      >
        <input
          type="text"
          value={this.state.title}
          onChange={e => this.handleChange("title", e.target.value)}
        />
        <select
          value={this.state.category}
          onChange={e => this.handleChange("category", e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit">Add Book</button>
      </form>
    );
  }
}

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
}

export default connect(
  null,
  { addBook, changeFilters }
)(BooksForm);
