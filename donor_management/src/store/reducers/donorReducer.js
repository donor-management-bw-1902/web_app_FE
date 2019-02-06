import {
    FETCHING_DONORS,
    FETCHING_DONORS_SUCCESS,
    FETCHING_DONORS_FAILURE,
    ADDING_DONOR,
    ADDING_DONOR_SUCCESS,
    ADDING_DONOR_FAILURE
} from '../actions';

const initialState = {
    donors:[],
    isFetchingDonors: false,
    isAddingDonor: false,
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
                donor: action.payload,
                error: '',
                isAddingDonor: false
            };
        case ADDING_DONOR_FAILURE:
            return {
                ...state,
                error: action.payload,
                isAddingDonor: false
            }
        default:
            return state;
    }
};