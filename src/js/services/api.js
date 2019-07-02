import axios from 'axios';

export const fetchData = async (method, path, data) => {
  const baseUrl = 'http://localhost:3000/v1';
  const fullPath = `${baseUrl}/${path}`;
  const result = await axios[method](fullPath, data);

  return result;
};

export const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};
