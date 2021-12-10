import { GET_MOVIES, GET_MOVIES_ERROR } from '../constants';
import { MovieAction, MovieState } from '..';

const initialMovieState: MovieState = {
  movies: [],
}

const movieReducer = (state = initialMovieState, action: MovieAction) => {
  switch (action.type) {
    case GET_MOVIES:
      return action.payload;
    case GET_MOVIES_ERROR:
      return action.payload;
    default:
      return state;
  }
}

export default movieReducer;
