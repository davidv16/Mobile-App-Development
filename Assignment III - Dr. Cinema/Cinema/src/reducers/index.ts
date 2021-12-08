import {combineReducers} from 'redux';
import upcomingReducer from './upcomingReducer';
import cinemaReducer from './cinemaReducer';

export default combineReducers ({
    upcomingReducer,
    cinemaReducer
})