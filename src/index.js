import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './store/configureStore';

// const middleware = [promise(), createLogger()];
// const store = createStore(getImages, applyMiddleware(...middleware));

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
serviceWorker.unregister();
