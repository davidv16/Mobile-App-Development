import IMovie from '../../models/IMovie';
import {GET_MOVIES, GET_MOVIES_ERROR} from '../constants';

const initialMovieState = {
  movies: []
}

export default function (state = initialMovieState, action: any){
    switch (action.type) {
        case GET_MOVIES:
          return action.payload
        default: return state;
    }
}