export const refs = {
  dateForm: document.querySelector('.js-date-form'),

  dayToWeek: document.querySelector('[data-convert-type="day-to-week"]'),
  weekToDay: document.querySelector('[data-convert-type="week-to-day"]'),

  weekToMonth: document.querySelector('[data-convert-type="week-to-month"]'),
  monthToWeek: document.querySelector('[data-convert-type="month-to-week"]'),

  monthToYear: document.querySelector('[data-convert-type="month-to-year"]'),
  yearToMonth: document.querySelector('[data-convert-type="year-to-month"]'),

  yearToDecade: document.querySelector('[data-convert-type="year-to-decade"]'),
  decadeToYear: document.querySelector('[data-convert-type="decade-to-year"]'),

  decadeToCentury: document.querySelector(
    '[data-convert-type="decade-to-century"]'
  ),
  centuryToDecade: document.querySelector(
    '[data-convert-type="century-to-decade"]'
  ),

  dateTriggerButton: document.querySelector('.js-date-trigger-button'),
};
