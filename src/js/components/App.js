import React from "react";
import Header from "../components/Header";
import BooksForm from "../containers/BooksForm";
import BookList from "../containers/BookList";
import "../../scss/main.scss";

export default () => (
  <div>
    <Header />
    <BooksForm />
    <BookList />
  </div>
);
