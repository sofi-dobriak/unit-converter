import { refs } from './refs';
import { dateConvert } from './date-convert';

const conversionMap = {
  'day-to-week': {
    target: refs.weekToDay,
    type: 'day-to-week',
  },

  'week-to-day': {
    target: refs.dayToWeek,
    type: 'week-to-day',
  },

  'week-to-month': {
    target: refs.monthToWeek,
    type: 'week-to-month',
  },

  'month-to-week': {
    target: refs.weekToMonth,
    type: 'month-to-week',
  },

  'month-to-year': {
    target: refs.yearToMonth,
    type: 'month-to-year',
  },

  'year-to-month': {
    target: refs.monthToYear,
    type: 'year-to-month',
  },

  'year-to-decade': {
    target: refs.decadeToYear,
    type: 'year-to-decade',
  },

  'decade-to-year': {
    target: refs.yearToDecade,
    type: 'decade-to-year',
  },

  'decade-to-century': {
    target: refs.centuryToDecade,
    type: 'decade-to-century',
  },

  'century-to-decade': {
    target: refs.decadeToCentury,
    type: 'century-to-decade',
  },
};

export function handleDateFormInput(e) {
  const input = e.target;
  const value = input.value;

  if (isNaN(value) || value === '') {
    Object.values(conversionMap).forEach(({ target }) => (target.value = ''));
    return;
  }

  Object.keys(conversionMap).forEach(key => {
    if (input.dataset.convertType === key) {
      const { target, type } = conversionMap[key];

      const convertedValue = dateConvert(value, type);

      if (isNaN(convertedValue)) {
        target.value = '';
      } else {
        target.value = convertedValue !== '' ? +convertedValue.toFixed(3) : '';
      }
    }
  });
}
