import { OPEN_CLOSE_MODAL } from "../constants"

export const openCloseModal = (openClose) => ({
    type: OPEN_CLOSE_MODAL,
    payload: openClose
}) 