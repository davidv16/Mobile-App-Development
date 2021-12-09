import { OPEN_CLOSE_MODAL } from "../constants";

export default function (state = false, action) {
    switch (action.type) {
        case "OPEN_MODAL":
            return action.payload
        case "CLOSE_MODAL":
            return action.payload
        default: return state
    }
}