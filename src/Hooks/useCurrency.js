import React, { useState, useEffect } from 'react'

export function useCurrency() {
  const [loading, setLoading] = useState(true)
  const [rates, setRates] = useState(null)

  useEffect(() => {
    async function fetchRates() {
      const rates = await getRates()
      setRates(rates)
      setLoading(false)
    }

    fetchRates()
  }, [])

  return { loading, rates }
}

async function getRates() {
  const result = await fetch(
    'https://openexchangerates.org/api/latest.json?app_id=9c04811964704a669a90ed58831307b1',
  )

  if (result.ok) {
    const { rates } = await result.json()

    return rates
  } else {
    console.error(`Error ${result.status}`)
  }
}
