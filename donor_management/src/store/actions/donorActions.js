import axios from 'axios';
    
export const FETCHING_DONORS = 'FETCHING_DONORS';
export const FETCHING_DONORS_SUCCESS = 'FETCHING_DONORS_SUCCESS';
export const FETCHING_DONORS_FAILURE = 'FETCHING_DONORS_FAILURE';
export const ADDING_DONOR = 'ADDING_DONOR';
export const ADDING_DONOR_SUCCESS = 'ADDING_DONOR_SUCCESS';
export const ADDING_DONOR_FAILURE = 'ADDING_DONOR_FAILURE';

export const getDonors = authToken => dispatch => {
    dispatch({ type: FETCHING_DONORS });
    axios
        .get('https://donor-management.herokuapp.com/api/donors', { headers: { Authorization: authToken }})
        .then(res => dispatch({ type: FETCHING_DONORS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCHING_DONORS_FAILURE, payload: err }))
};

export const addNewDonor = donor => dispatch => {
    dispatch({ type: ADDING_DONOR });
}