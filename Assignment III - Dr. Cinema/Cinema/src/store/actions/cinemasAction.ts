import { GET_CINEMAS } from "../constants";
import { getCinemas } from "../../services";
import ICinema from '../../models/IUpcomingMovie'
import { Dispatch } from "redux";

export const getCinemasDispatch = () => async (dispatch: Dispatch) => {
    const cinemas:any = await getCinemas();
    console.log('inside async action creator: ' + cinemas);
    dispatch(getCinemaSuccess(cinemas))
};

const getCinemaSuccess = (cinema: ICinema[]) => ({
    type: GET_CINEMAS,
    payload: cinema
}) 