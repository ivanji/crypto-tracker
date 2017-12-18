import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL,
} from './../Utils/ActionTypes';


export default function(state = { crypto: [] }, action) {

    switch(action.type) {

        case FETCHING_COIN_DATA:
            return {...state};

        case FETCHING_COIN_DATA_SUCCESS:

            return {
                ...state, crypto: action.payload
            };

        case FETCHING_COIN_DATA_FAIL:
            return {...state};


        default:
            return state;
    }

}