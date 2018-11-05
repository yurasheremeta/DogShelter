import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import getImages from './store/DogApp';

const createMiddleware = () => {
  const middleware = [
    thunk,
    promiseMiddleware(),
  ];
  return middleware;
};
const middleware = createMiddleware();
const store = createStore(
  getImages,
  compose(applyMiddleware(...middleware)),
);
console.log(store.getState());

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
