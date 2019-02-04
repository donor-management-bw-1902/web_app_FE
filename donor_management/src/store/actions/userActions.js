import axios from 'axios';

export const FETCHING_USERS = 'FETCHING_USERS';
export const FETCHING_USERS_SUCCESS = 'FETCHING_USERS_SUCCESS';
export const FETCHING_USERS_FAILURE = 'FETCHING_USERS_FAILURE';
export const ADDING_USER = 'ADDING_USER';
export const ADDING_USER_SUCCESS = 'ADDING_USER_SUCCESS';
export const ADDING_USER_FAILURE = 'ADDING_USER_FAILURE';

export const getUsers = () => dispatch => {
    dispatch({ type: FETCHING_USERS });
    axios
        .get('')
        .then(res => dispatch({ type: FETCHING_USERS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCHING_USERS_FAILURE, payload: err }))
};

export const addNewUser = user => dispatch => {
    dispatch({ type: ADDING_USER });
    axios
        .post('', user)
        .then(res => dispatch({ type: ADDING_USER_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: ADDING_USER_FAILURE, payload: err }))
};

