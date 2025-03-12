const massConverts = {
  'gram-to-kilogram': v => v / 1000,
  'kilogram-to-gram': v => v * 1000,
  'kilogram-to-tonne': v => v / 1000,
  'tonne-to-kilogram': v => v * 1000,
};

export function massConvert(value, type) {
  if (!Number.isFinite(value)) return null;
  return massConverts[type](value);
}
