export function timeConvert(value, type) {
  if (isNaN(value) || value === '') return;

  switch (type) {
    case 'ms-to-sec':
      return msToSec(value);
    case 'sec-to-ms':
      return secToMs(value);
    case 'sec-to-min':
      return secToMin(value);
    case 'min-to-sec':
      return minToSec(value);
    case 'min-to-h':
      return minToHours(value);
    case 'h-to-min':
      return hoursToMin(value);
    case 'h-to-days':
      return hoursToDays(value);
    case 'days-to-h':
      return daysToHours(value);
    default:
      return '';
  }
}

function msToSec(ms) {
  const sec = ms / 1000;
  return sec;
}

function secToMs(sec) {
  const ms = sec * 1000;
  return ms;
}

function secToMin(sec) {
  const min = sec / 60;
  return min;
}

function minToSec(min) {
  const sec = min * 60;
  return sec;
}

function minToHours(min) {
  const hours = min / 60;
  return hours;
}

function hoursToMin(hours) {
  const min = hours * 60;
  return min;
}

function hoursToDays(hours) {
  const days = hours / 24;
  return days;
}

function daysToHours(days) {
  const hours = days * 24;
  return hours;
}
