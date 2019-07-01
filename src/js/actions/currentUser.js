import { SET_CURRENT_USER } from './actionTypes';

export const setCurrentUser = currentUser => ({
  type: SET_CURRENT_USER,
  currentUser,
});

export const authenticate = loginParams => (dispatch) => {
  const url = 'http://localhost:3000/sessions';

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginParams),
  })
    .then(response => response.json())
    .then((d) => {
      // dispatch(setCurrentUser(d.user));
      console.log(d);
    });
};
