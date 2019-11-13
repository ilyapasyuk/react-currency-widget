import React, { useState } from 'react'
import styled from 'styled-components'
import { BALANCE, CURRENCY_NAME } from '../../Constants/pocketFields'

const CurrencyInput = ({ pockets, placeholder, onChange }) => {
  const [firstCurrency] = pockets
  const [activeCurrency, setCurrency] = useState(firstCurrency)
  const [value, setValue] = useState(0)

  function onActiveCurrencyChangeHandler(currency) {
    const selectedCurrency = pockets.find(pocket => pocket.currency === currency)
    setCurrency(selectedCurrency)
    onChange({ [activeCurrency.currency]: value })
  }

  function onValueChange(value) {
    setValue(value)
    onChange({ [activeCurrency.currency]: value })
  }

  return (
    <div>
      <select
        value={activeCurrency.currency}
        onChange={e => onActiveCurrencyChangeHandler(e.target.value)}
      >
        {pockets.map(pocket => (
          <option value={pocket.currency} key={pocket[BALANCE]}>
            {pocket[CURRENCY_NAME]}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder={placeholder}
        step="0.01"
        min={0}
        onChange={e => onValueChange(Number(e.target.value))}
        value={value}
        max={activeCurrency.balance}
      />
      you have {activeCurrency.currency} - {activeCurrency.balance}
    </div>
  )
}

export default CurrencyInput
