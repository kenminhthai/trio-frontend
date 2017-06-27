import React from 'react';
import ReactDOM from 'react-dom';
import Trio from './components/Trio';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers'

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { createLogger }  from 'redux-logger'
import  thunk  from 'redux-thunk'

import './App.css'

const logger = createLogger()
const store  = createStore(reducers, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <Trio />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
