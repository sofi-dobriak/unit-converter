const tempConverters = {
  'C-to-F': v => (v * 9) / 5 + 32,
  'F-to-C': v => ((v - 32) * 5) / 9,
  'C-to-K': v => v + 273.15,
  'K-to-C': v => v - 273.15,
  'F-to-K': v => ((v - 32) * 5) / 9 + 273.15,
  'K-to-F': v => ((v - 273.15) * 9) / 5 + 32,
};

export function convertTemp(value, type) {
  if (!Number.isFinite(value)) return null;
  return tempConverters[type](value);
}
