import { combineReducers } from 'redux';
import map from './map';
import container  from './container'


const myApp = combineReducers({
    container,
    map
})

export default myApp;