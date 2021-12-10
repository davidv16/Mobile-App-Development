import { GET_MOVIES, GET_MOVIES_ERROR } from "../constants";
import { getMovies } from "../../services";
import { Dispatch } from "redux";
import IMovie from "../../models/IMovie";

let movies: IMovie[] = [];

export const getMoviesDispatch = () => async (dispatch: Dispatch) => {
    movies = await getMovies();
    //const sortedMovies: IMovie[] = sortMovies(movies);
    dispatch(getMoviesSuccess(movies))
};

const getMoviesSuccess = (movies: IMovie[]) => ({
    type: GET_MOVIES,
    payload: movies
}) 

const getMoviesError = (err: any) => ({
  type: GET_MOVIES_ERROR,
  payload: `GET in /movies: ${err.message}`
})


const sortMovies = (data: IMovie[]) => {
  return data.sort((a, b) => ((a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)));
};


export const filterCinemaMovies = async (id: number) => {
  const filtered: IMovie[] = movies
    // @ts-ignore
    .filter((m) => m.showTimes
      .some((c: any) => c.cinema.id === id));
  /*
  for (const i of movies) {
    for (const s of i.showTimes as []) {
      if (s.cinema.id === cinema.id) {
        filtered.push(i);
      }
    }
  }
  console.log(filtered);
  */
  return filtered;
};