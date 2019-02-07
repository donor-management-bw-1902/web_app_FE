import {
    FETCHING_DONORS,
    FETCHING_DONORS_SUCCESS,
    FETCHING_DONORS_FAILURE,
    ADDING_DONOR,
    ADDING_DONOR_SUCCESS,
    ADDING_DONOR_FAILURE,
    ADDING_DONATION,
    ADDING_DONATION_SUCCESS,
    ADDING_DONATION_FAILURE,
    UPDATING_DONOR,
    UPDATING_DONOR_SUCCESS,
    UPDATING_DONOR_FAILURE,
    FETCHING_DONATIONS,
    FETCHING_DONATIONS_SUCCESS,
    FETCHING_DONATIONS_FAILURE
} from '../actions';

const initialState = {
    donors:[],
    donations:[],
    isFetchingDonors: false,
    isAddingDonor: false,
    isAddingDonation: false,
    isUpdatingDonor: false,
    isFetchingDonations: false,
    response: '',
    error:''
};

export const donorReducer = (state = initialState, action) => {
    switch(action.type){
        // ===================== FETCHING_DONORS
        case FETCHING_DONORS:
            return {
                ...state,
                error: '',
                isFetchingDonors: true
            };

        case FETCHING_DONORS_SUCCESS: 
            return {
                ...state,
                donors: action.payload,
                error: '',
                isFetchingDonors: false
            }
        case FETCHING_DONORS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetchingDonors: false
            };
        // ===================== ADDING_DONOR
        case ADDING_DONOR:
            return {
                ...state,
                error: '',
                isAddingDonor: true
            };
        case ADDING_DONOR_SUCCESS:
            return {
                ...state,
                donors: action.payload,
                error: '',
                isAddingDonor: false
            };
        case ADDING_DONOR_FAILURE:
            return {
                ...state,
                error: action.payload,
                isAddingDonor: false
            }
            // ===================== UPDATING_DONOR
        case UPDATING_DONOR:
            return {
                ...state,
                isUpdatingDonor: true,
                error: ''
            };
        case UPDATING_DONOR_SUCCESS: 
            return {
                ...state,
                response: action.payload,
                isUpdatingDonor: false,
                error: ''
            }
        case UPDATING_DONOR_FAILURE:
            return {
                ...state,
                error: action.payload,
                isUpdatingDonor: false
            }
        // ===================== ADDING_DONATIONS
        case ADDING_DONATION:
            return {
                ...state,
                isAddingDonation: true,
                error: ''
            }
        case ADDING_DONATION_SUCCESS:
            return {
                ...state,
                isAddingDonation: false,
                error: ''
            }
        case ADDING_DONATION_FAILURE:
            return {
                ...state,
                error: action.payload,
                isAddingDonation: false
            }
        // ===================== FETCHING_DONATIONS
        case FETCHING_DONATIONS:
            return {
                ...state,
                isFetchingDonations: true,
                error: ''
            }
        case FETCHING_DONATIONS_SUCCESS:
            return {
                ...state,
                donations: action.payload,
                isFetchingDonations: false,
                error: ''
            }
        case FETCHING_DONATIONS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetchingDonations: false
            }
        default:
            return state;
    }
};