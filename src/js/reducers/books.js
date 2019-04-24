import books from '../data/dummyBooks';

export default (state = books, action) => {
  switch(action.type){
    case 'ADD_BOOK':
      return [...state, action.book];
    default:
      return state;
  }
};