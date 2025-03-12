import { refs } from './refs';
import { covertVolume } from './volume-convert';

const conversionMap = {
  'mm3-to-cm3': {
    target: refs.cm3ToMm3,
    type: 'mm3-to-cm3',
  },

  'cm3-to-mm3': {
    target: refs.mm3ToCm3,
    type: 'cm3-to-mm3',
  },

  'cm3-to-m3': {
    target: refs.M3ToCm3,
    type: 'cm3-to-m3',
  },

  'm3-to-cm3': {
    target: refs.cm3ToM3,
    type: 'm3-to-cm3',
  },

  'l-to-cm3': {
    target: refs.cm3ToLiter,
    type: 'l-to-cm3',
  },

  'cm3-to-l': {
    target: refs.literToCm3,
    type: 'cm3-to-l',
  },

  'm3-to-l': {
    target: refs.literToM3,
    type: 'm3-to-l',
  },

  'l-to-m3': {
    target: refs.m3ToLiter,
    type: 'l-to-m3',
  },
};

export function handleVolumeInput(e) {
  const input = e.target;
  const value = input.value;

  if (isNaN(+value) || input.value === '') {
    Object.values(conversionMap).forEach(({ target }) => {
      target.value = '';
    });
    return;
  }

  Object.keys(conversionMap).forEach(key => {
    if (input.dataset.convertType === key) {
      const { target, type } = conversionMap[key];

      const convertedValue = covertVolume(+value, type);
      if (isNaN(convertedValue)) {
        target.value = '';
      } else {
        target.value = +convertedValue.toFixed(3);
      }
    }
  });
}
