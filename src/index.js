import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import myApp from './reducers'
import registerServiceWorker from './registerServiceWorker';

const middlewares = [thunk]

let store = createStore(
  myApp,
  composeWithDevTools(applyMiddleware(...middlewares))
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

