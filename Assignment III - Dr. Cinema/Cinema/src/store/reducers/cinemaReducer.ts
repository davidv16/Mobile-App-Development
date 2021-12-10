import { GET_CINEMAS, GET_CINEMAS_ERROR } from '../constants';
import { CinemaAction, CinemaState } from '..';

const initialCinemas: CinemaState = {
  cinemas: [],
}

const cinemaReducer = (state = initialCinemas, action: CinemaAction) => {
  switch (action.type) {
    case GET_CINEMAS:
      return action.payload;
    case GET_CINEMAS_ERROR:
      return action.payload;
    default:
      return state;
  }
}

export default cinemaReducer;
