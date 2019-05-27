import React from 'react';
import Modal from 'react-modal';
import BooksForm from '../containers/BooksForm';

const BooksFormModal = ({ addBookMode }) => (
  <Modal
    isOpen={addBookMode}
    ariaHideApp={false}
  >
    <h3>Add New Book</h3>
    <BooksForm />
  </Modal>
);

export default BooksFormModal;
