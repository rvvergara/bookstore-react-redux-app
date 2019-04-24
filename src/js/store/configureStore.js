import { createStore } from "redux";
import booksReducer from "../reducers/books";
export default () => {
  const store = createStore(booksReducer);
  return store;
};
