import makeAxios from './axios-config';

export const FETCHING_DONORS = 'FETCHING_DONORS';
export const FETCHING_DONORS_SUCCESS = 'FETCHING_DONORS_SUCCESS';
export const FETCHING_DONORS_FAILURE = 'FETCHING_DONORS_FAILURE';
export const ADDING_DONOR = 'ADDING_DONOR';
export const ADDING_DONOR_SUCCESS = 'ADDING_DONOR_SUCCESS';
export const ADDING_DONOR_FAILURE = 'ADDING_DONOR_FAILURE';
export const ADDING_DONATION = 'ADDING_DONATION';
export const ADDING_DONATION_SUCCESS = 'ADDING_DONATION_SUCCESS';
export const ADDING_DONATION_FAILURE = 'ADDING_DONATION_FAILURE';
export const UPDATING_DONOR = 'UPDATING_DONOR';
export const UPDATING_DONOR_SUCCESS = 'UPDATING_DONOR_SUCCESS';
export const UPDATING_DONOR_FAILURE = 'UPDATING_DONOR_FAILURE';
export const FETCHING_DONATIONS = 'FETCHING_DONATIONS';
export const FETCHING_DONATIONS_SUCCESS = 'FETCHING_DONATIONS_SUCCESS';
export const FETCHING_DONATIONS_FAILURE = 'FETCHING_DONATIONS_FAILURE';

export const getDonors = () => dispatch => {
    dispatch({ type: FETCHING_DONORS });
    makeAxios()
        .get('donors')
        .then(res => dispatch({ type: FETCHING_DONORS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCHING_DONORS_FAILURE, payload: err }))
};

export const addNewDonor = donor => dispatch => {
    dispatch({ type: ADDING_DONOR });
    makeAxios()
        .post('donors', donor)
        .then(res => {
            makeAxios().get('donors')
            .then(res => dispatch({ type: ADDING_DONOR_SUCCESS, payload: res.data }))
        })
        .catch(err => dispatch({ type: ADDING_DONOR_FAILURE, payload: err }))
};

export const addDonation = donation => dispatch => {
    dispatch({ type: ADDING_DONATION });
    makeAxios()
        .post('donations', donation)
        .then(res => dispatch({type: ADDING_DONATION_SUCCESS, payload: res }))
        .catch(err => dispatch({ type: ADDING_DONATION_FAILURE, payload: err }))
};

export const updateDonor = (donor, id) => dispatch => {
    dispatch({ type: UPDATING_DONOR });
    makeAxios()
        .put(`donors/${id}`, donor)
        .then(res => dispatch({ type: UPDATING_DONOR_SUCCESS, payload: res }))
        .catch(err => dispatch({ type: UPDATING_DONOR_FAILURE, payload: err }))
};

export const getDonations = () => dispatch => {
    dispatch({ type: FETCHING_DONATIONS });
    makeAxios()
        .get('donations')
        .then(res => dispatch({ type: FETCHING_DONATIONS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCHING_DONATIONS_FAILURE, payload: err }))
};