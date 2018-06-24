import { combineReducers } from 'redux';
import main from './main';
import container  from './container'
import login  from './login'


const rootReducer = combineReducers({
    container,
    login,
    main,
})

export default rootReducer;