export async function getRates() {
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
