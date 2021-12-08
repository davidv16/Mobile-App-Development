import {combineReducers} from 'redux';
import upcoming from './upcomingReducer';
import cinema from './cinemaReducer';

export default combineReducers ({
    upcoming,
    cinema
})