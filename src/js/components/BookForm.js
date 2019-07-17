import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBookToLibrary } from '../thunks/book';
import { switchAddBookMode } from '../actions/book';
import InputWrapper from './InputWrapper';

export const BookForm = ({ book, addBookToLibrary, switchAddBookMode }) => {
  const authorNames = book ? (typeof book.authors === 'object' ? book.authors.join(', ') : book.authors) : ' ';

  const thumbNailLink = book ? (book.imageLinks ? book.imageLinks.smallThumbnail : book.thumbnail) : ' ';

  const categoryName = book ? (book.categories ? book.categories[0] : book.category) : '';

  const isbnCode = book ? (book.industryIdentifiers ? book.industryIdentifiers[0].identifier : book.isbn) : '';

  const pages = book ? (book.pageCount || book.page_count) : '';

  const publicationDate = book ? (book.publishedDate || book.published_date) : '';

  const [title, setTitle] = useState(book ? book.title : '');
  const [subTitle, setSubTitle] = useState(book ? book.subtitle : '');
  const [authors, setAuthors] = useState(authorNames);
  const [description, setDescription] = useState(book ? book.description : '');
  const [publishedDate, setPublishedDate] = useState(publicationDate);
  const [thumbNail, setThumbNail] = useState(thumbNailLink);
  const [isbn, setIsbn] = useState(isbnCode);
  const [pageCount, setPageCount] = useState(pages);
  const [category, setCategory] = useState(categoryName);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBookToLibrary({
      book: {
        title,
        subtitle: subTitle,
        authors,
        description,
        published_date: publishedDate,
        thumbnail: thumbNail,
        isbn,
        page_count: pageCount,
        category,
      },
    })
      .then(() => switchAddBookMode());
  };

  return (
    <form>
      <InputWrapper
        inputValue={title}
        labelValue="Title: "
        setInput={setTitle}
        type="text"
        inputId="title"
        error={null}
      />
      <InputWrapper
        inputValue={subTitle}
        labelValue="Sub-title: "
        setInput={setSubTitle}
        type="text"
        inputId="sub-title"
        error={null}
      />
      <InputWrapper
        inputValue={authors}
        labelValue="Authors: "
        setInput={setAuthors}
        type="text"
        inputId="authors"
        error={null}
      />
      <InputWrapper
        inputValue={category}
        labelValue="Category: "
        setInput={setCategory}
        type="text"
        inputId="category"
        error={null}
      />
      <InputWrapper
        inputValue={isbn}
        labelValue="ISBN: "
        setInput={setIsbn}
        type="text"
        inputId="isbn"
        error={null}
      />
      <InputWrapper
        inputValue={description}
        labelValue="Description: "
        setInput={setDescription}
        type="textarea"
        inputId="description"
        error={null}
      />
      <InputWrapper
        inputValue={publishedDate}
        labelValue="Published Date: "
        setInput={setPublishedDate}
        type="text"
        inputId="published-date"
        error={null}
      />
      <InputWrapper
        inputValue={pageCount}
        labelValue="Page Count: "
        setInput={setPageCount}
        type="text"
        inputId="page-count"
        error={null}
      />
      <InputWrapper
        inputValue={thumbNail}
        labelValue="Thumbnail Link: "
        setInput={setThumbNail}
        type="text"
        inputId="thumbnail"
        error={null}
      />
      <div className="btn-wrapper">
        <button
          type="submit"
          className="add-book-btn"
          onClick={handleSubmit}
        >
          Add Book To Library
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  book: state.addBookMode.book,
});

export default connect(mapStateToProps, { addBookToLibrary, switchAddBookMode })(BookForm);
