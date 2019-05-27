import uuid from 'uuid';

const books = [
  {
    id: uuid(),
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    category: 'Learning',
  },
  {
    id: uuid(),
    title: 'Harry Potter',
    author: 'JK Rowling',
    category: 'Action',
  },
];

export default books;
