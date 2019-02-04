import axios from 'axios';
    
export const FETCHING_DONORS = 'FETCHING_DONORS';
export const FETCHING_DONORS_SUCCESS = 'FETCHING_DONORS_SUCCESS';
export const FETCHING_DONORS_FAILURE = 'FETCHING_DONORS_FAILURE';

export const getDonors = () => dispatch => {
    dispatch({ type: FETCHING_DONORS });
};