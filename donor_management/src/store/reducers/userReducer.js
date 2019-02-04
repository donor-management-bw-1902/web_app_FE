import {
    FETCHING_USERS,
    FETCHING_USERS_SUCCESS,
    FETCHING_USERS_FAILURE,
    ADDING_USER,
    ADDING_USER_SUCCESS,
    ADDING_USER_FAILURE,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    UPDATE_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE
} from '../actions';


const initialState = {
    users: [],
    isFetchingUsers: false,
    isAddingUser: false,
    isDeletingUser: false,
    isUpdatingUser: false,
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
        // ===================== DELETE_USER
        case DELETE_USER:
            return {
                ...state,
                isDeletingFriend: true,
                error: ''
            };
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isDeletingUser: false,
                error: ''
            };
        case DELETE_USER_FAILURE: 
            return {
                ...state,
                error: action.payload,
                isDeletingUser: false
            };
        // ====================== UPDATE_USER
        case UPDATE_USER: 
            return {
                ...state,
                isUpdatingUser: true,
                error: ''
            }
        case UPDATE_USER_SUCCESS: 
            return {
                ...state,
                users: action.payload,
                isUpdatingUser: false,
                error: ''
            }
        case UPDATE_USER_FAILURE: 
            return {
                ...state,
                error: action.payload,
                isUpdatingUser: false
            }
        default:
            return state;
    }
};