import { GET_UPCOMING_MOVIES } from "../constants";
import { getUpcomingMovies } from "../../services";
import IUpcomingMovie from '../../models/IUpcomingMovie'
import { Dispatch } from "redux";

export const getUpcoming = () => async (dispatch: Dispatch) => {
    const upcoming = await getUpcomingMovies();
    const sortedUpcoming = sortUpcomingMovies(upcoming)
    dispatch(getUpcomingMoviesSuccess(sortedUpcoming))
};

const getUpcomingMoviesSuccess = (upcoming: IUpcomingMovie[]) => ({
    type: GET_UPCOMING_MOVIES,
    payload: upcoming
}) 

const sortUpcomingMovies = (data: IUpcomingMovie[]) => {
  return data.sort((a, b) => ((a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)));
};