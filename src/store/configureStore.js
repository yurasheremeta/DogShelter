import { createStore, applyMiddleware, compose } from 'redux';
// import  thunk  from 'redux-thunk';
// import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import getImages from '../reducers/DogApp';
import promise from '../indexPromise';

const middleware = [promise(), createLogger()];
const composeEnhancers = (
  process.env.NODE_ENV === 'development'
&& window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-underscore-dangle
) || compose;
const store = createStore(getImages, composeEnhancers(applyMiddleware(...middleware)));

export default store;
// import { applyMiddleware, createStore, compose } from 'redux';
// import promiseMiddleware from 'redux-promise-middleware';
// import thunkMidlleware from 'redux-thunk';

// import getImages from '../reducers/DogApp';

// export default function configureStore() {
//   const store = createStore(
//     getImages,
//     compose(applyMiddleware(thunkMidlleware, promiseMiddleware())),
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
//   return store;
// }
