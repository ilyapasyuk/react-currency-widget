import React, { useEffect, useReducer, createContext } from 'react'
import { getRates } from '../../Services/getRates'
import { stateReducer } from '../../Reducers/state'
import {
  CURRENCY,
  POCKETS,
  RATES,
  BALANCE,
  CURRENCY_NAME,
  EXCHANGE,
} from '../../Constants/pocketFields'
import { SET_RATES } from '../../Actions/exchange'
import Exchange from '../../Components/Exchange'
import styled from 'styled-components'
import './style.css'

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
`

const initialState = {
  [POCKETS]: [
    {
      [CURRENCY_NAME]: CURRENCY.USD,
      [BALANCE]: 1000.29,
    },
    {
      [CURRENCY_NAME]: CURRENCY.GBP,
      [BALANCE]: 100.35,
    },
    {
      [CURRENCY_NAME]: CURRENCY.EUR,
      [BALANCE]: 117.09,
    },
  ],
  [RATES]: [],
  [EXCHANGE.FROM]: {
    [CURRENCY_NAME]: CURRENCY.USD,
    value: 0,
  },
  [EXCHANGE.TO]: {
    [CURRENCY_NAME]: CURRENCY.GBP,
    value: 0,
  },
}

export const StateContext = createContext(initialState)

const App = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState)

  useEffect(() => {
    async function fetchRates() {
      const rates = await getRates()

      dispatch({ type: SET_RATES, rates })
    }

    fetchRates()
    setInterval(async () => fetchRates(), 10000)
  }, [])

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <AppContainer>
        <Exchange />
      </AppContainer>
    </StateContext.Provider>
  )
}

export default App
