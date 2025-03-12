import { refs } from './refs';
import { unitConverter } from './unit-convert';

const conversionMap = {
  'unit-to-square': {
    target: refs.squareToUnit,
    type: 'unit-to-square',
  },

  'square-to-unit': {
    target: refs.unitToSquare,
    type: 'square-to-unit',
  },

  'unit-to-cubic': {
    target: refs.cubicToUnit,
    type: 'unit-to-cubic',
  },

  'cubic-to-unit': {
    target: refs.unitToCubic,
    type: 'cubic-to-unit',
  },
};

export function handleUnitFormInput(e) {
  const input = e.target;
  const value = input.value;

  if (isNaN(value) || value === '') {
    Object.values(conversionMap).forEach(({ target }) => (target.value = ''));
    return;
  }

  Object.keys(conversionMap).forEach(key => {
    if (input.dataset.convertType === key) {
      const { target, type } = conversionMap[key];

      const convertedValue = unitConverter(+value, type);

      if (isNaN(convertedValue)) {
        target.value = '';
      } else {
        target.value = +convertedValue.toFixed(2);
      }
    }
  });
}
