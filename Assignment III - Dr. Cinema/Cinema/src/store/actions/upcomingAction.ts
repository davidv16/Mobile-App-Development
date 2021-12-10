import { Dispatch } from 'redux';
import { GET_UPCOMING_MOVIES, GET_UPCOMING_MOVIES_ERROR } from '../constants';
import { getUpcomingMovies } from '../../services';
import IUpcomingMovie from '../../models/IUpcomingMovie'

export const getUpcomingDispatch = () => async (dispatch: Dispatch) => {
  try {
    const upcoming: IUpcomingMovie[] = await getUpcomingMovies();
    const sortedUpcoming = sortUpcomingMovies(upcoming);
    dispatch(getUpcomingMoviesSuccess(sortedUpcoming));
  } catch (err) {
    dispatch(getMoviesError(err));
  }
};

const getUpcomingMoviesSuccess = (upcoming: IUpcomingMovie[]) => ({
  type: GET_UPCOMING_MOVIES,
  payload: upcoming,
})

const getMoviesError = (err: any) => ({
  type: GET_UPCOMING_MOVIES_ERROR,
  payload: `GET in /upcoming: ${err.message}`,
})

const sortUpcomingMovies = (data: IUpcomingMovie[]) => data.sort((a, b) => ((a.releaseDate > b.releaseDate) ? 1 : ((b.releaseDate > a.releaseDate) ? -1 : 0)));
