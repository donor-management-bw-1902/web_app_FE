import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { donorReducer } from './donorReducer';

export default combineReducers({
    userReducer,
    donorReducer
});