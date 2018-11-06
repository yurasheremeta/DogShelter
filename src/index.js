import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import configureStore from './store/configureStore';

// import store from './store/configureStore';

import getImages from './reducers/DogApp';
import promise from './indexPromise';
// const createMiddleware = () => {
//   const middleware = [
//     thunk,
//     promiseMiddleware(),
//   ];
//   return middleware;
// };

// const middleware = createMiddleware();
// const store = createStore(
//   getImages,
//   compose(applyMiddleware(...middleware)),
// );


const middleware = [promise(), createLogger()];
// const composeEnhancers = (
//   process.env.NODE_ENV === 'development'
// && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-underscore-dangle
// ) || compose;
const store = createStore(getImages, applyMiddleware(...middleware));

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
serviceWorker.unregister();
