const timesConverters = {
  'ms-to-sec': v => v / 1000,
  'sec-to-ms': v => v * 1000,
  'sec-to-min': v => v / 60,
  'min-to-sec': v => v * 60,
  'min-to-h': v => v / 60,
  'h-to-min': v => v * 60,
  'h-to-days': v => v / 24,
  'days-to-h': v => v * 24,
};

export function timeConvert(value, type) {
  if (!Number.isFinite(value)) return null;
  return timesConverters[type](value);
}
