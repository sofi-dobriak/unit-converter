import { refs } from './refs';
import { speedConvert } from './speed-convert';

const conversionMap = {
  'm/sec-to-km/h': {
    target: refs.kilometerPerHourToMeterPerSec,
    type: 'm/sec-to-km/h',
  },

  'km/h-to-m/sec': {
    target: refs.meterPerSecToKilometerPerHour,
    type: 'km/h-to-m/sec',
  },

  'km/h-to-mi/h': {
    target: refs.milePerHourToKilometerPerHour,
    type: 'km/h-to-mi/h',
  },

  'mi/h-to-km/h': {
    target: refs.kilometerPerHourToMilePerHour,
    type: 'mi/h-to-km/h',
  },
};

export function handleSpeedFormInput(e) {
  const input = e.target;
  const value = input.value;

  if (isNaN(value) || input.value === '') {
    Object.values(conversionMap).forEach(({ target }) => (target.value = ''));
  }

  Object.keys(conversionMap).forEach(key => {
    if (input.dataset.convertType === key) {
      const { target, type } = conversionMap[key];

      const convertedValue = speedConvert(value, type);

      if (isNaN(convertedValue)) {
        target.value = '';
      } else {
        target.value = convertedValue !== '' ? +convertedValue.toFixed(4) : '';
      }
    }
  });
}
