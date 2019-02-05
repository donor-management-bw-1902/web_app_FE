import axios from 'axios';
    
export const FETCHING_DONORS = 'FETCHING_DONORS';
export const FETCHING_DONORS_SUCCESS = 'FETCHING_DONORS_SUCCESS';
export const FETCHING_DONORS_FAILURE = 'FETCHING_DONORS_FAILURE';
export const ADDING_DONOR = 'ADDING_DONOR';
export const ADDING_DONOR_SUCCESS = 'ADDING_DONOR_SUCCESS';
export const ADDING_DONOR_FAILURE = 'ADDING_DONOR_FAILURE';

export const getDonors = () => dispatch => {
    dispatch({ type: FETCHING_DONORS });
};

export const addNewDonor = donor => dispatch => {
    dispatch({ type: ADDING_DONOR });
}