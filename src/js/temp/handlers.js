import { refs } from './refs';
import { convertTemp } from './temp-covert';

const conversionMap = {
  'F-to-C': {
    target: refs.celsiusToFarenheitInput,
    type: 'F-to-C',
  },
  'C-to-F': {
    target: refs.fahrenheitToCelsiusInput,
    type: 'C-to-F',
  },
  'F-to-K': {
    target: refs.kelvinToFarenheitInput,
    type: 'F-to-K',
  },
  'K-to-F': {
    target: refs.fahrenheitToKelvinInput,
    type: 'K-to-F',
  },
  'C-to-K': {
    target: refs.kelvinToCelsiusInput,
    type: 'C-to-K',
  },
  'K-to-C': {
    target: refs.celsiusToKelvinInput,
    type: 'K-to-C',
  },
};

export function handleTemperatureInput(e) {
  const input = e.target;
  const value = parseFloat(input.value);

  if (isNaN(+value) || input.value === '') {
    Object.values(conversionMap).forEach(({ target }) => (target.value = ''));
    return;
  }

  Object.keys(conversionMap).forEach(key => {
    if (input.dataset.convertType === key) {
      const { target, type } = conversionMap[key];

      const convertedValue = convertTemp(+value, type);

      if (isNaN(convertedValue)) {
        target.value = '';
      } else {
        target.value = +convertedValue.toFixed(1);
      }
    }
  });
}
