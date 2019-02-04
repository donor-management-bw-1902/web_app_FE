import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { BoardMemberReducer } from './BoardMemberReducer';

export default combineReducers({
    userReducer,
    BoardMemberReducer
});