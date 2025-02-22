export function convertTemp(type, value) {
  if (isNaN(value) || value === '') return '';

  switch (type) {
    case 'C-to-F':
      return celsiusToFahrenheit(value);
    case 'F-to-C':
      return fahrenheitToCelsius(value);
    case 'C-to-K':
      return celsiusToKelvin(value);
    case 'K-to-C':
      return kelvinToCelsius(value);
    case 'F-to-K':
      return fahrenheitToKelvin(value);
    case 'K-to-F':
      return kelvinToFahrenheit(value);
    default:
      return '';
  }
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9 + 273.15;
}

function kelvinToFahrenheit(kelvin) {
  return ((kelvin - 273.15) * 9) / 5 + 32;
}
