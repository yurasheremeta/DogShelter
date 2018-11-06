import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import getImages from '../reducers/AppReducer';

const middleware = [promise(), createLogger()];
const store = createStore(getImages, applyMiddleware(...middleware));


export default store;
