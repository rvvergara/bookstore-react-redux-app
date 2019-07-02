import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middleWares = process.env.NODE_ENV === 'development' ? [applyMiddleware(thunk), devTools] : [applyMiddleware(thunk)];

export default () => {
  const store = createStore(
    rootReducer,
    compose(...middleWares),
  );
  return store;
};
