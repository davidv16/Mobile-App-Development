export default function (action: any, state = false) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return action.payload
    case 'CLOSE_MODAL':
      return action.payload
    default:
      return state
  }
}
