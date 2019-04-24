import uuid from 'uuid';

const addBook = ({title, category}) => ({
  type: 'ADD_BOOK',
  book: {
    id: uuid(),
    title,
    category, 
  }
}); 

const removeBook = (id) => ({
  type: 'REMOVE_BOOK',
  id,
});

const changeFilters = (filterText) => ({
  type: 'CHANGE_FILTER',
  filterText,
});

export {
  addBook,
  removeBook,
}