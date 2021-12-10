import { Dispatch } from 'redux';
import { GET_MOVIES, GET_MOVIES_ERROR } from '../constants';
import { getMovies } from '../../services';
import IMovie from '../../models/IMovie';

export const getMoviesDispatch = () => async (dispatch: Dispatch) => {
  try {
    const movies:IMovie[] = await getMovies();
    dispatch(getMoviesSuccess(movies))
  } catch (err) {
    dispatch(getMoviesError(err))
  }
};

const getMoviesSuccess = (movies: IMovie[]) => ({
  type: GET_MOVIES,
  payload: movies,
})

const getMoviesError = (err: any) => ({
  type: GET_MOVIES_ERROR,
  payload: `GET in /movies: ${err.message}`,
})
