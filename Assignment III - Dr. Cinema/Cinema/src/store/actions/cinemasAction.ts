import { GET_CINEMAS } from "../constants";
import { getCinemas } from "../../services";
import ICinema from '../../models/ICinema'
import { Dispatch } from "redux";

export const getCinemasDispatch = () => async (dispatch: Dispatch) => {
    const cinemas:ICinema[] = await getCinemas();
    const sortedCinemas: ICinema[] = sortCinemas(cinemas);
    dispatch(getCinemaSuccess(sortedCinemas))
};

const getCinemaSuccess = (cinemas: ICinema[]) => ({
    type: GET_CINEMAS,
    payload: cinemas
});


const sortCinemas = (data: ICinema[]) => {
  return data.sort((a, b) => ((a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)));
};