import {
    FETCHING_USERS,
    FETCHING_USERS_SUCCESS,
    FETCHING_USERS_FAILURE,
    ADDING_USER,
    ADDING_USER_SUCCESS,
    ADDING_USER_FAILURE,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions';



const initialState = {
    users: [],
    isLoggingIn: false,
    isFetchingUsers: false,
    isAddingUser: false,
    authToken: '',
    isAdmin: '',
    userId: '',
    error: ''
};

export const userReducer = (state = initialState, action ) => {
    switch(action.type){
        // ===================== LOGGING IN
        case LOGIN: 
            return {
                ...state,
                isLoggingIn: true,
                error: ''
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                authToken: action.payload.token,
                isAdmin: action.payload.isAdmin,
                isLoggingIn: false
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoggingIn: false
            }
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