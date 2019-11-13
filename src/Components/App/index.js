import React, { useEffect, useReducer, createContext } from 'react'
import { getRates } from '../../Services/getRates'
import { stateReducer } from '../../Reducers/state'
import { CURRENCY, POCKET, RATES } from '../../Constants/pocketFields'
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
  [POCKET]: {
    [CURRENCY.USD]: 1000,
    [CURRENCY.GBP]: 0,
    [CURRENCY.EUR]: 0,
  },
  [RATES]: null,
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
