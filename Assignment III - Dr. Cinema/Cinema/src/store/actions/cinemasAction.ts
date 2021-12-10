import { Dispatch } from 'redux';
import { GET_CINEMAS, GET_CINEMAS_ERROR } from '../constants';
import { getCinemas } from '../../services';
import ICinema from '../../models/ICinema'

export const getCinemasDispatch = () => async (dispatch: Dispatch) => {
  try {
    const cinemas:ICinema[] = await getCinemas();
    const sortedCinemas: ICinema[] = sortCinemas(cinemas);
    dispatch(getCinemaSuccess(sortedCinemas));
  } catch (err) {
    dispatch(getCinemaError(err));
  }
};

const getCinemaSuccess = (cinemas: ICinema[]) => ({
  type: GET_CINEMAS,
  payload: cinemas,
});

const getCinemaError = (err: any) => ({
  type: GET_CINEMAS_ERROR,
  payload: `GET in /cinemas: ${err.message}`,
})

const sortCinemas = (data: ICinema[]) => data.sort((a, b) => ((a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)));
