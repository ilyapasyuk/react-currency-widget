import { SET_FROM, SET_RATES, SET_TO } from '../Actions/exchange'
import { EXCHANGE, RATES } from '../Constants/pocketFields'

export function stateReducer(state, action) {
  switch (action.type) {
    case SET_RATES:
      return {
        ...state,
        [RATES]: action[RATES],
      }
    case SET_FROM:
      return {
        ...state,
        [EXCHANGE.FROM]: action.value,
      }

    case SET_TO:
      return {
        ...state,
        [EXCHANGE.TO]: action.value,
      }
    default:
      return state
  }
}
