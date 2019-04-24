import React from "react";
import { connect } from "react-redux";
import { removeBook,
  changeFilters,
} from "../actions";
import Book from "../components/Book";
import CategoryFilter from '../components/CategoryFilter';

const BookList = props => (
  <div>
    <CategoryFilter 
      filter={props.filter}
      handleChange={(optionValue)=> props.changeFilters(optionValue)}
    />
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
  </div>
);

const mapStateToProps = state => {
  return {
    books: state.books,
    filter: state.filter,
  };
};

export default connect(
  mapStateToProps,
  { removeBook, changeFilters }
)(BookList);
