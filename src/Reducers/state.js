import { SET_RATES } from '../Actions/exchange'
import { RATES } from '../Constants/pocketFields'

export function stateReducer(state, action) {
  switch (action.type) {
    case SET_RATES:
      return {
        ...state,
        [RATES]: action[RATES],
      }
    default:
      return state
  }
}
