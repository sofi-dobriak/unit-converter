export function dateConvert(value, type) {
  if (isNaN(value) || value === '') return;

  switch (type) {
    case 'day-to-week':
      return daysToWeeks(value);
    case 'week-to-day':
      return weeksToDays(value);
    case 'week-to-month':
      return weeksToMonths(value);
    case 'month-to-week':
      return monthsToWeeks(value);
    case 'month-to-year':
      return monthsToYears(value);
    case 'year-to-month':
      return yearsToMonths(value);
    case 'year-to-decade':
      return yearsToDecades(value);
    case 'decade-to-year':
      return decadesToYears(value);
    case 'decade-to-century':
      return decadesToCenturies(value);
    case 'century-to-decade':
      return centuriesToDecades(value);
  }
}

function daysToWeeks(days) {
  const weeks = days / 7;
  return weeks;
}

function weeksToDays(weeks) {
  const days = weeks * 7;
  return days;
}

function weeksToMonths(weeks) {
  const months = weeks / 4.345;
  return months;
}

function monthsToWeeks(months) {
  const weeks = months * 4.345;
  return weeks;
}

function monthsToYears(months) {
  const years = months / 12;
  return years;
}

function yearsToMonths(years) {
  const months = years * 12;
  return months;
}

function yearsToDecades(years) {
  const decades = years / 10;
  return decades;
}

function decadesToYears(decades) {
  const years = decades * 10;
  return years;
}

function decadesToCenturies(decades) {
  const centuries = decades / 10;
  return centuries;
}

function centuriesToDecades(centuries) {
  const decades = centuries * 10;
  return decades;
}
