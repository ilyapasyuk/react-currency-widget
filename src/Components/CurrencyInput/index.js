import React, { useState } from 'react'
import { BALANCE, CURRENCY_NAME } from '../../Constants/pocketFields'

const CurrencyInput = ({ pockets, placeholder, onChange, value }) => {
  const [firstCurrency] = pockets
  const [activeCurrency, setCurrency] = useState(firstCurrency)

  function onActiveCurrencyChangeHandler(currency) {
    const selectedCurrency = pockets.find(pocket => pocket.currency === currency)
    setCurrency(selectedCurrency)
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
        onChange={e =>
          onChange({
            [CURRENCY_NAME]: activeCurrency.currency,
            value: Number(e.target.value),
          })
        }
        value={value}
        max={activeCurrency.balance}
      />
      you have {activeCurrency.currency} - {activeCurrency.balance}
    </div>
  )
}

export default CurrencyInput
