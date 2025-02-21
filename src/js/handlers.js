import { refs } from './refs';
import { celsiusInFaringate, faringatesInCelsius } from './temp-covert';

export function handleInputFill(e) {
  const isFromFahrenheit = e.target === refs.fahrenheitInput;

  if (isFromFahrenheit) {
    const fahrenheitValue = refs.fahrenheitInput.value;

    if (fahrenheitValue === '') {
      refs.celsiusInput.value = '';
    } else {
      const convertedCelsius = faringatesInCelsius(fahrenheitValue);
      refs.celsiusInput.value = +convertedCelsius.toFixed(2);
    }
  } else {
    const celsiusValue = refs.celsiusInput.value;

    if (celsiusValue === '') {
      refs.fahrenheitInput.value === '';
    } else {
      const convertedFahrenheit = celsiusInFaringate(celsiusValue);
      refs.fahrenheitInput.value = +convertedFahrenheit.toFixed(2);
    }
  }
}

export function hadleReplaceButtonClick() {
  const currentFahrenheit = refs.fahrenheitInput.value;
  const currentCelsius = refs.celsiusInput.value;

  refs.celsiusInput.value = currentFahrenheit;
  refs.fahrenheitInput.value = currentCelsius;

  const fahrenheitPlaceholder = refs.fahrenheitInput.placeholder;
  const celsiusPlaceholder = refs.celsiusInput.placeholder;

  refs.fahrenheitInput.placeholder = celsiusPlaceholder;
  refs.celsiusInput.placeholder = fahrenheitPlaceholder;
}
