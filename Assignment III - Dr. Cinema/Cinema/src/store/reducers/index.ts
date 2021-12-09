import {combineReducers} from 'redux';
import upcoming from './upcomingReducer';
import cinemas from './cinemaReducer';

export default combineReducers ({
    upcoming,
    cinemas
})