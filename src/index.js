import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import myApp from './reducers/index'
import registerServiceWorker from './registerServiceWorker';
import {watchLogin} from './saga/login'

//创建saga middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware]

let store = createStore(
  myApp,
  composeWithDevTools(applyMiddleware(...middlewares))
)
sagaMiddleware.run(watchLogin)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

