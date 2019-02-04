import axios from 'axios';

export const FETCHING_USERS = 'FETCHING_USERS';
export const FETCHING_USERS_SUCCESS = 'FETCHING_USERS_SUCCESS';
export const FETCHING_USERS_FAILURE = 'FETCHING_USERS_FAILURE';
export const ADDING_USER = 'ADDING_USER';
export const ADDING_USER_SUCCESS = 'ADDING_USER_SUCCESS';
export const ADDING_USER_FAILURE = 'ADDING_USER_FAILURE';
export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const getUsers = () => dispatch => {
    dispatch({ type: FETCHING_USERS });
};

export const addNewUser = user => {
    dispatch({ type: ADDING_USER });
};

export const updateUser = ( user, id) => dispatch => {
    dispatch({ type: UPDATE_USER });
};

export const deleteUser = id => dispatch => {
    dispatch({ type: DELETE_USER });
};