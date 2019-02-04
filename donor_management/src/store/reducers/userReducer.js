import {
    FETCHING_USERS,
    FETCHING_USERS_SUCCESS,
    FETCHING_USERS_FAILURE,
    ADDING_USER,
    ADDING_USER_SUCCESS,
    ADDING_USER_FAILURE,
} from '../actions';



const initialState = {
    users: [],
    isFetchingUsers: false,
    isAddingUser: false,
    isAdmin: '',
    userId: '',
    error: ''
};

export const userReducer = (state = initialState, action ) => {
    switch(action.type){
        // ===================== FETCHING_USERS
        case FETCHING_USERS:
            return {
                ...state,
                error: '',
                isFetchingUsers: true
            };

        case FETCHING_USERS_SUCCESS: 
            return {
                ...state,
                users: action.payload,
                error: '',
                isFetchingUsers: false
            }
        case FETCHING_USERS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetchingUsers: false
            };
        // ===================== ADDING_USER
        case ADDING_USER:
            return {
                ...state,
                isAddingUser: true,
                error: ''
            };
        case ADDING_USER_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isAddingUser: false,
                error: ''
            };
        case ADDING_USER_FAILURE: 
            return {
                ...state,
                error: action.payload,
                isAddingUser: false
            };
        default:
            return state;
    }
};