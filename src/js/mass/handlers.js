import { refs } from './refs';
import { massConvert } from './mass-convert';

const conversionMap = {
  'gram-to-kilogram': {
    target: refs.kilogramToGram,
    type: 'gram-to-kilogram',
  },

  'kilogram-to-gram': {
    target: refs.gramToKilogram,
    type: 'kilogram-to-gram',
  },

  'kilogram-to-tonne': {
    target: refs.tonneToKilogram,
    type: 'kilogram-to-tonne',
  },

  'tonne-to-kilogram': {
    target: refs.kilogramToTonne,
    type: 'tonne-to-kilogram',
  },
};

export function handleMassFormInput(e) {
  const input = e.target;
  const value = input.value;

  if (isNaN(value) || input.value === '') {
    Object.values(conversionMap).forEach(({ target }) => {
      target.value = '';
      return;
    });
  }

  Object.keys(conversionMap).forEach(key => {
    if (input.dataset.convertType === key) {
      const { target, type } = conversionMap[key];

      const convertedValue = massConvert(value, type);

      if (isNaN(convertedValue)) {
        target.value = '';
      } else {
        target.value = convertedValue !== '' ? +convertedValue.toFixed(4) : '';
      }
    }
  });
}
