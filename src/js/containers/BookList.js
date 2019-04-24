import React from "react";
import books from "../data/dummyBooks";
import Book from "../components/Book";

const BookList = () => (
  <table>
    <thead>
      <tr>
        <th>BOOK ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </tbody>
  </table>
);

export default BookList;
