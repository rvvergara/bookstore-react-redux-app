import React from "react";

const Book = props => {
  const { id, title, category } = props.book;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

export default Book;
