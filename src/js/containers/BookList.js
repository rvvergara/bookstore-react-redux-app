import React from "react";
import { connect } from "react-redux";
import { removeBook } from "../actions";
import books from "../data/dummyBooks";
import Book from "../components/Book";

const BookList = props => (
  <table>
    <thead>
      <tr>
        <th>BOOK ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {props.books.map(book => (
        <Book
          key={book.id}
          book={book}
          handleRemove={id => props.removeBook(id)}
        />
      ))}
    </tbody>
  </table>
);

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

export default connect(
  mapStateToProps,
  { removeBook }
)(BookList);
