import {GET_CINEMAS} from '../constants';

const initialCinemas = {
  cinemas: []
}

export default function (state = initialCinemas, action: any){
    switch (action.type) {
        case GET_CINEMAS:
            return action.payload
        default: return state
    }
}