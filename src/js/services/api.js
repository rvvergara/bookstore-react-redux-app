export const fetchData = (type, resource, data) => {
  const baseUrl = 'http://localhost:3000/v1';
  const url = `${baseUrl}/${resource}`;

  return fetch(url, {
    method: type,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .catch(error => console.log(error));
};
