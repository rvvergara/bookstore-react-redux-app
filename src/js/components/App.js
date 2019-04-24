import React from "react";
import ReacDOM from "react-dom";
import BooksForm from "../containers/BooksForm";
import BookList from "../containers/BookList";
import "../../scss/main.scss";

export default () => (
  <div>
    <h1>Bookstore App</h1>
    <BooksForm />
    <BookList />
  </div>
);