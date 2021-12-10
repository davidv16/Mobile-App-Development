import { GET_UPCOMING_MOVIES, GET_UPCOMING_MOVIES_ERROR } from '../constants';
import { UpcomingAction, UpcomingState } from '..';

const initialUpcoming: UpcomingState = {
  upcoming: [],
}

const upcomingReducer = (state = initialUpcoming, action: UpcomingAction) => {
  switch (action.type) {
    case GET_UPCOMING_MOVIES:
      return action.payload;
    case GET_UPCOMING_MOVIES_ERROR:
      return action.payload;
    default:
      return state;
  }
}

export default upcomingReducer;
