import { combineReducers } from 'redux';
import map from './map';
import container  from './container'
import login  from './login'


const myApp = combineReducers({
    container,
    login,
    map,
})

export default myApp;