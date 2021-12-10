import { combineReducers } from 'redux';
import upcoming from './upcomingReducer';
import cinemas from './cinemaReducer';
import movies from './movieReducer';

export default combineReducers({
  upcoming,
  cinemas,
  movies,
})
