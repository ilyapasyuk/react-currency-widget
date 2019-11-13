import React, { useContext } from 'react'
import { StateContext } from '../App'
import styled from 'styled-components'
import CurrencyInput from '../CurrencyInput'
import { EXCHANGE, POCKETS } from '../../Constants/pocketFields'
import { SET_FROM, SET_TO } from '../../Actions/exchange'

const ExchangeWrapper = styled.div`
  width: 600px;
  min-height: 400px;
  background-color: white;
  padding: 10px;
  border: 1px solid rgb(217, 217, 217);
  box-shadow: rgba(0, 0, 0, 0.15) 0 3px 8px 0;
  position: relative;
`

const Exchange = () => {
  const { state, dispatch } = useContext(StateContext)
  const isExchangeDisabled =
    !Boolean(Object.values(state[EXCHANGE.TO])) || !Boolean(Object.values(state[EXCHANGE.FROM]))

  return (
    <ExchangeWrapper>
      <CurrencyInput
        pockets={state[POCKETS]}
        placeholder="From"
        onChange={value => dispatch({ type: SET_FROM, value })}
      />
      <CurrencyInput
        pockets={state[POCKETS]}
        placeholder="To"
        onChange={value => dispatch({ type: SET_TO, value })}
      />
      <button disabled={isExchangeDisabled}>Exchange</button>
    </ExchangeWrapper>
  )
}

export default Exchange
