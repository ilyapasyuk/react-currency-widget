import React, { useContext } from 'react'
import { StateContext } from '../App'
import { POCKET } from '../../Constants/pocketFields'

const CurrencyInput = ({}) => {
  const { state, dispatch } = useContext(StateContext)
  return (
    <div>
      <select>
        {Object.keys(state[POCKET]).map(pocket => (
          <option value={pocket} key={pocket}>
            {pocket}
          </option>
        ))}
      </select>
      <input type="number" placeholder="one" step="0.01" min="0" />
    </div>
  )
}

export default CurrencyInput
