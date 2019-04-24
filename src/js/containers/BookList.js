import React from "react";
import books from "../data/dummyBooks";

const BookList = () => (
  <table>
    <thead>
      <th>BOOK ID</th>
      <th>Title</th>
      <th>Category</th>
    </thead>
    <tbody>
      {books.map(book => (
        <tr key={book.id}>
          <td>{book.id}</td>
          <td>{book.title}</td>
          <td>{book.category}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default BookList;
