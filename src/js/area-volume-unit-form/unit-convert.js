const unitsConvrter = {
  'unit-to-square': v => v ** 2,
  'square-to-unit': v => Math.sqrt(v),
  'unit-to-cubic': v => v ** 3,
  'cubic-to-unit': v => Math.cbrt(v),
};

export function unitConverter(value, type) {
  if (!Number.isFinite(value)) return null;
  return unitsConvrter[type](value);
}
