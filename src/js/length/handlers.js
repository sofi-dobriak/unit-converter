import { refs } from './refs';
import { lenConvert } from './len-convert';

const conversionMap = {
  'mm-to-cm': {
    target: refs.cmToMm,
    type: 'mm-to-cm',
  },

  'cm-to-mm': {
    target: refs.mmToCm,
    type: 'cm-to-mm',
  },

  'cm-to-m': {
    target: refs.meterToCm,
    type: 'cm-to-m',
  },

  'm-to-cm': {
    target: refs.cmToMeter,
    type: 'm-to-cm',
  },

  'm-to-km': {
    target: refs.kmToMeter,
    type: 'm-to-km',
  },

  'km-to-m': {
    target: refs.meterToKm,
    type: 'km-to-m',
  },

  // 'cm-to-inch': {
  //   target: refs.inchToCm,
  //   type: 'cm-to-inch',
  // },

  // 'inch-to-cm': {
  //   target: refs.cmToInch,
  //   type: 'inch-to-cm',
  // },

  // 'm-to-ft': {
  //   target: refs.footToMeter,
  //   type: 'm-to-ft',
  // },

  // 'ft-to-m': {
  //   target: refs.meterToFoot,
  //   type: 'ft-to-m',
  // },

  // 'm-to-yd': {
  //   target: refs.yardToMeter,
  //   type: 'm-to-yd',
  // },

  // 'yd-to-m': {
  //   target: refs.meterToYard,
  //   type: 'yd-to-m',
  // },

  // 'km-to-mi': {
  //   target: refs.mileToKm,
  //   type: 'km-to-mi',
  // },

  // 'mi-to-km': {
  //   target: refs.kmToMile,
  //   type: 'mi-to-km',
  // },
};

export function handleLengthInput(e) {
  const input = e.target;
  const value = input.value;

  if (isNaN(+value) || input.value === '') {
    Object.values(conversionMap).forEach(({ target }) => (target.value = ''));
    return;
  }

  Object.keys(conversionMap).forEach(key => {
    if (input.dataset.convertType === key) {
      const { target, type } = conversionMap[key];

      const convertedValue = lenConvert(+value, type);

      if (isNaN(convertedValue)) {
        target.value = '';
      } else {
        target.value = +convertedValue.toFixed(3);
      }
    }
  });
}
