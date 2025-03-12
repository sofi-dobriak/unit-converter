import { refs } from './refs';
import { timeConvert } from './time-convert';

const conversionMap = {
  'ms-to-sec': {
    target: refs.secToMs,
    type: 'ms-to-sec',
  },

  'sec-to-ms': {
    target: refs.msToSec,
    type: 'sec-to-ms',
  },

  'sec-to-min': {
    target: refs.minToSec,
    type: 'sec-to-min',
  },

  'min-to-sec': {
    target: refs.secToMin,
    type: 'min-to-sec',
  },

  'min-to-h': {
    target: refs.hoursToMin,
    type: 'min-to-h',
  },

  'h-to-min': {
    target: refs.minToHours,
    type: 'h-to-min',
  },

  'h-to-days': {
    target: refs.daysToHours,
    type: 'h-to-days',
  },

  'days-to-h': {
    target: refs.hoursToDays,
    type: 'days-to-h',
  },
};

export function handleTimeFormInput(e) {
  const input = e.target;
  const value = input.value;

  if (isNaN(+value) || value === '') {
    Object.values(conversionMap).forEach(({ target }) => (target.value = ''));
    return;
  }

  Object.keys(conversionMap).forEach(key => {
    if (input.dataset.convertType === key) {
      const { target, type } = conversionMap[key];

      const convertedValue = timeConvert(+value, type);

      if (isNaN(convertedValue)) {
        target.value = '';
      } else {
        target.value = +convertedValue.toFixed(3);
      }
    }
  });
}
