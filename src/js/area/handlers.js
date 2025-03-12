import { refs } from './refs';
import { areaConverter } from './area-convert';

const conversionMap = {
  'mm2-to-cm2': {
    target: refs.cm2ToMm2,
    type: 'mm2-to-cm2',
  },

  'cm2-to-mm2': {
    target: refs.mm2ToCm2,
    type: 'cm2-to-mm2',
  },

  'cm2-to-m2': {
    target: refs.m2ToCm2,
    type: 'cm2-to-m2',
  },

  'm2-to-cm2': {
    target: refs.cm2ToM2,
    type: 'm2-to-cm2',
  },

  'm2-to-km2': {
    target: refs.km2ToM2,
    type: 'm2-to-km2',
  },

  'km2-to-m2': {
    target: refs.m2ToKm2,
    type: 'km2-to-m2',
  },

  'm2-to-ft2': {
    target: refs.ft2ToM2,
    type: 'm2-to-ft2',
  },

  'ft2-to-m2': {
    target: refs.m2ToFt2,
    type: 'ft2-to-m2',
  },
};

export function handleAreaInput(e) {
  const input = e.target;
  const value = input.value;

  if (value === '' || isNaN(+value)) {
    Object.values(conversionMap).forEach(({ target }) => {
      target.value = '';
    });
    return;
  }

  Object.keys(conversionMap).forEach(key => {
    if (input.dataset.convertType === key) {
      const { target, type } = conversionMap[key];

      const convertedValue = areaConverter(+value, type);

      if (isNaN(convertedValue)) {
        target.value = '';
      } else {
        target.value = +convertedValue.toFixed(4);
      }
    }
  });
}
