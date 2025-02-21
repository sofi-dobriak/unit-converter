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

  const fahrenheitPlaceholder = refs.fahrenheitInput.placeholder;
  const celsiusPlaceholder = refs.celsiusInput.placeholder;

  refs.fahrenheitInput.placeholder = celsiusPlaceholder;
  refs.celsiusInput.placeholder = fahrenheitPlaceholder;

  if (currentFahrenheit) {
    refs.celsiusInput.value = currentFahrenheit;
    const newFarenheit = celsiusInFaringate(currentFahrenheit);
    refs.fahrenheitInput.value = +newFarenheit.toFixed(2);
  } else if (currentCelsius) {
    refs.fahrenheitInput.value = currentCelsius;
    const newCelsius = faringatesInCelsius(currentCelsius);
    refs.celsiusInput.value = +newCelsius.toFixed(2);
  }
}
