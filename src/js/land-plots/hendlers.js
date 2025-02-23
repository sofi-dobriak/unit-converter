import { refs } from './refs';
import { landConvert } from './land-convert';

const conversionMap = {
  'sot-to-m2': {
    target: refs.m2ToSotka,
    type: 'sot-to-m2',
  },

  'm2-to-sot': {
    target: refs.sotkaToM2,
    type: 'm2-to-sot',
  },

  'm2-to-ha': {
    target: refs.hectareToM2,
    type: 'm2-to-ha',
  },

  'ha-to-m2': {
    target: refs.m2ToHectare,
    type: 'ha-to-m2',
  },

  'm2-to-acre': {
    target: refs.acreToM2,
    type: 'm2-to-acre',
  },

  'acre-to-m2': {
    target: refs.m2ToAcre,
    type: 'acre-to-m2',
  },

  'acre-to-hectare': {
    target: refs.hectareToAcre,
    type: 'acre-to-hectare',
  },

  'hectare-to-acre': {
    target: refs.acreToHectare,
    type: 'hectare-to-acre',
  },
};

export function handleLandFormInput(e) {
  const input = e.target;
  const value = input.value;

  if (isNaN(value) || value === '') {
    Object.values(conversionMap).forEach(({ target }) => {
      target.value = '';
    });
    return;
  }

  Object.keys(conversionMap).forEach(key => {
    if (input.dataset.convertType === key) {
      const { target, type } = conversionMap[key];

      const convertedValue = landConvert(value, type);

      if (isNaN(convertedValue)) {
        target.value = '';
      } else {
        target.value = convertedValue !== '' ? +convertedValue.toFixed(4) : '';
      }
    }
  });
}
