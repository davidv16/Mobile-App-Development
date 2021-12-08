import { GET_UPCOMING_MOVIES } from "../constants";
import { getUpcomingMovies } from "../services";
import IUpcomingMovie from '../models/IUpcomingMovie'
import { Dispatch } from "redux";

export const getUpcoming = () => async (dispatch: Dispatch) => {
    const upcomingMovies = await getUpcomingMovies();
    // console.log('inside async action creator: ' + ));
    dispatch(getUpcomingMoviesSuccess(upcomingMovies))
};

const getUpcomingMoviesSuccess = upcoming => ({
    type: GET_UPCOMING_MOVIES,
    payload: upcoming
}) 