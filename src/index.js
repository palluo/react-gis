import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from 'reducers/index'
import registerServiceWorker from './registerServiceWorker'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import { routerMiddleware } from 'react-router-redux'
import { watchLogin } from 'saga/login'

//创建saga middleware
const sagaMiddleware = createSagaMiddleware()
const routerMid = routerMiddleware(BrowserRouter)
const middlewares = [sagaMiddleware, routerMid]
let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)
//const history = syncHistoryWithStore(BrowserRouter, store)
sagaMiddleware.run(watchLogin)

const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>

    </Provider>,
    document.getElementById('root')
  );
render(App)
registerServiceWorker();

