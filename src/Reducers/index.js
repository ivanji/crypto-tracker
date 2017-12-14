import { combineReducers } from 'redux';
import CryptoReducer from '../Reducers/CryptoReducer';

export default combineReducers({
    crypto: CryptoReducer
});