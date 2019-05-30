import uuid from 'uuid';

const books = [
  {
    id: uuid(),
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    chapters: '10',
    category: 'Learning',
  },
  {
    id: uuid(),
    title: 'Harry Potter',
    author: 'JK Rowling',
    chapters: '20',
    category: 'Action',
  },
];

export default books;
