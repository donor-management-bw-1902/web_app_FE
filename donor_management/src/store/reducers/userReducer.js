import {
    FETCHING_USERS,
    FETCHING_USERS_SUCCESS,
    FETCHING_USERS_FAILURE,
    ADDING_USER,
    ADDING_USER_SUCCESS,
    ADDING_USER_FAILURE,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE
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
                isFetchingFriends: true
            };

        case FETCHING_USERS_SUCCESS: 
            return {
                ...state,
                friends: action.payload,
                error: '',
                isFetchingFriends: false
            }
        case FETCHING_USERS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetchingFriends: false
            };
        // ===================== ADDING_USER
        case ADDING_USER:
            return {
                ...state,
                isAddingFriend: true,
                error: ''
            };
        case ADDING_USER_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                isAddingFriend: false,
                error: ''
            };
        case ADDING_USER_FAILURE: 
            return {
                ...state,
                error: action.payload,
                isAddingFriend: false
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
                friends: action.payload,
                isDeletingFriend: false,
                error: ''
            };
        case DELETE_USER_FAILURE: 
            return {
                ...state,
                error: action.payload,
                isDeletingFriend: false
            };
    }
};