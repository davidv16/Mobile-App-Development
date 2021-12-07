import { GET_UPCOMING_MOVIES } from "../constants";

export default function (state = 0, action) {
    switch (action.type) {
        case GET_UPCOMING_MOVIES:
            console.log('inside reducer: ' + action.payload);    
            return action.payload
        default: return state
    }
}