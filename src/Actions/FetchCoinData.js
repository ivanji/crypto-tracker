//import axios from 'axios';
import { apiBaseUrl } from './../Utils/Constants';
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL,
} from './../Utils/ActionTypes';


export function fetchCoinData() {
    return function(dispatch) {

        fetch(`${apiBaseUrl}/v1/ticker/?limit=10`)
            .then((response) => {
                if (response.status !== 200) {
                    console.log("Looks like there was a problem. Status Code: " + response.status);
                    return;
                }
                response.json().then(data => {
                    dispatch(fetchCoinDataSuccess(data));
                })

            })
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                // ADD THIS THROW error
                throw error;
        });
    }
}

export function fetchCoinDataSuccess(data) {
            return {
                type: FETCHING_COIN_DATA_SUCCESS,
                payload: data
            };
}
