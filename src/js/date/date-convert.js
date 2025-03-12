const dateConvert = {
  'day-to-week': v => v / 7,
  'week-to-day': v => v * 7,
  'week-to-month': v => v / 4.345,
  'month-to-week': v => v * 4.345,
  'month-to-year': v => v / 12,
  'year-to-month': v => v * 12,
  'year-to-decade': v => v / 10,
  'decade-to-year': v => v * 10,
  'decade-to-century': v => v / 10,
  'century-to-decade': v => v * 10,
};

export function dateConverter(value, type) {
  if (!Number.isFinite(value)) return null;
  return dateConvert[type](value);
}
