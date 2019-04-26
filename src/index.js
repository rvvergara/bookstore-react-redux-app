import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './js/components/App';
import configureStore from './js/store/configureStore';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

const connectedApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(connectedApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
