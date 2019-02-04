import {
    FETCHING_DONORS,
    FETCHING_DONORS_SUCCESS,
    FETCHING_DONORS_FAILURE
} from '../actions';

const donor = { name: "Billy", lastContacted: "3 days ago"};

const initialState = {
    donors:[ donor ],
    isFetchingDonors: false,
    error:''
};

export const BoardMemberReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
};