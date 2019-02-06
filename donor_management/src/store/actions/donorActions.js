import axios from 'axios';
    
export const FETCHING_DONORS = 'FETCHING_DONORS';
export const FETCHING_DONORS_SUCCESS = 'FETCHING_DONORS_SUCCESS';
export const FETCHING_DONORS_FAILURE = 'FETCHING_DONORS_FAILURE';
export const ADDING_DONOR = 'ADDING_DONOR';
export const ADDING_DONOR_SUCCESS = 'ADDING_DONOR_SUCCESS';
export const ADDING_DONOR_FAILURE = 'ADDING_DONOR_FAILURE';
export const ADDING_DONATION = 'ADDING_DONATION';
export const ADDING_DONATION_SUCCESS = 'ADDING_DONATION_SUCCESS';
export const ADDING_DONATION_FAILURE = 'ADDING_DONATION_FAILURE';

export const getDonors = authToken => dispatch => {
    dispatch({ type: FETCHING_DONORS });
    axios
        .get('https://donor-management.herokuapp.com/api/donors', { headers: { Authorization: authToken }})
        .then(res => dispatch({ type: FETCHING_DONORS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCHING_DONORS_FAILURE, payload: err }))
};

export const addNewDonor = (donor, authToken) => dispatch => {
    dispatch({ type: ADDING_DONOR });
    axios
        .post('https://donor-management.herokuapp.com/api/donors', donor, { headers: { Authorization: authToken }})
        .then(res => {
            axios.get('https://donor-management.herokuapp.com/api/donors', { headers: { Authorization: authToken }})
            .then(res => dispatch({ type: ADDING_DONOR_SUCCESS, payload: res.data }))
        })
        .catch(err => dispatch({ type: ADDING_DONOR_FAILURE, payload: err }))
};

export const addDonation = (donation, authToken) => dispatch => {
    dispatch({ type: ADDING_DONATION });
    axios
        .post('https://donor-management.herokuapp.com/api/donations', donation, { headers: { Authorization: authToken }})
        .then(res => dispatch({type: ADDING_DONATION_SUCCESS, payload: res }))
        .catch(err => dispatch({ type: ADDING_DONATION_FAILURE, payload: err }))
};