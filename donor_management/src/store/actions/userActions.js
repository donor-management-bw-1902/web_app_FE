import makeAxios from './axios-config';

export const FETCHING_USERS = 'FETCHING_USERS';
export const FETCHING_USERS_SUCCESS = 'FETCHING_USERS_SUCCESS';
export const FETCHING_USERS_FAILURE = 'FETCHING_USERS_FAILURE';
export const ADDING_USER = 'ADDING_USER';
export const ADDING_USER_SUCCESS = 'ADDING_USER_SUCCESS';
export const ADDING_USER_FAILURE = 'ADDING_USER_FAILURE';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const RESET_AUTH_TOKEN = 'RESET_AUTH_TOKEN';

export const login = user => dispatch => {
    dispatch({ type: LOGIN });
    makeAxios()
        .post('login', user)
        .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err.message }));
}

export const addNewUser = user => dispatch => {
    dispatch({ type: ADDING_USER });
    makeAxios()
        .post('register', user)
        .then(res => dispatch({ type: ADDING_USER_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: ADDING_USER_FAILURE, payload: err }))
};

export const resetAuthToken = () => dispatch => {
    dispatch({ type: RESET_AUTH_TOKEN });
}
