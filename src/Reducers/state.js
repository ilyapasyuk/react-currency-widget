import { SET_RATES, SET_FROM, SET_TO, EXECUTE_EXCHANGE } from '../Actions/exchange'
import {
  BALANCE,
  CURRENCY,
  CURRENCY_NAME,
  EXCHANGE,
  POCKETS,
  RATES,
} from '../Constants/pocketFields'

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
        [EXCHANGE.TO]: {
          [CURRENCY_NAME]: state[EXCHANGE.TO][CURRENCY_NAME],
          value: 0,
        },
      }

    case SET_TO:
      return {
        ...state,
        [EXCHANGE.TO]: action.value,
        [EXCHANGE.FROM]: {
          [CURRENCY_NAME]: state[EXCHANGE.TO][CURRENCY_NAME],
          value: 0,
        },
      }

    case EXECUTE_EXCHANGE:
      return {
        ...state,
        [POCKETS]: [
          {
            [CURRENCY_NAME]: CURRENCY.USD,
            [BALANCE]: 100.0,
          },
          {
            [CURRENCY_NAME]: CURRENCY.GBP,
            [BALANCE]: 200.35,
          },
          {
            [CURRENCY_NAME]: CURRENCY.EUR,
            [BALANCE]: 317.09,
          },
        ],
      }

    default:
      return state
  }
}
