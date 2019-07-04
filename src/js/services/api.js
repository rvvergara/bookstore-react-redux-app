import axios from 'axios';

export const fetchData = async (method, path, data) => {
  const result = await axios[method](path, data);
  return result;
};

export const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export const bookListFromGoogle = async (keyword) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&key=AIzaSyByfkJoR-TNhxJ-O0wLkYbIuD1bwkqmVkM&maxResults=40&orderBy=relevance`;

  setAuthorizationToken(false);
  const books = await axios.get(url);
  setAuthorizationToken(localStorage.token);
  return books;
};

// Sample query to googlebooks api
export const sampleList = () => {
  bookListFromGoogle('cool')
    .then(res => console.log(res.data.items.map(item => item.volumeInfo)))
    .catch(err => console.log(err));
};
