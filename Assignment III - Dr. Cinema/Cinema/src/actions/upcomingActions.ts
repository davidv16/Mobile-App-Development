import { GET_UPCOMING_MOVIES } from "../constants";
import { getUpcomingMovies } from "../services";

export const getUpcoming = () => async dispatch => {
    const upcomingMovies = await getUpcomingMovies();
    console.log('inside async action creator: ' + upcomingMovies[0].title);
    dispatch(getUpcomingMoviesSuccess(upcomingMovies))
};

const getUpcomingMoviesSuccess = upcoming => ({
    type: GET_UPCOMING_MOVIES,
    payload: upcoming
}) 