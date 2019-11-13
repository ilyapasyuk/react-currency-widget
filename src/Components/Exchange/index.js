import React, { useContext } from 'react'
import { StateContext } from '../App'
import styled from 'styled-components'
import CurrencyInput from '../CurrencyInput'
import { SET_CURRENCY } from '../../Actions/exchange'

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
  console.log('state', state)
  return (
    <ExchangeWrapper>
      <CurrencyInput />
      <CurrencyInput />
      <button>Exchange</button>
    </ExchangeWrapper>
  )
}

export default Exchange
