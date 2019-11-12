import React, { useLayoutEffect, useState, useReducer } from 'react'
import { useCurrency } from '../../Hooks/useCurrency'
import './style.css'

const App = () => {
  const { loading, rates } = useCurrency()
  console.log('loading', loading)
  console.log('rates', rates)
  return <div className="App">12</div>
}

export default App
