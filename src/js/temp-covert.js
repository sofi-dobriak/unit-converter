export function celsiusInFaringate(celsius) {
  const convertedFahrenheit = (celsius * 9) / 5 + 32;
  return convertedFahrenheit;
}

export function faringatesInCelsius(faringates) {
  const convertedCelsius = ((faringates - 32) * 5) / 9;
  return convertedCelsius;
}
