import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';
import 'normalize.css';
import './assets/styles/index.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import reducers from './store/reducers/index';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(reducers, applyMiddleware(reduxThunk));

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // dev code
  axios.defaults.baseURL = 'http://localhost:3001';
} else {
  axios.defaults.baseURL = 'https://built-users.herokuapp.com/';
  // production code
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();

