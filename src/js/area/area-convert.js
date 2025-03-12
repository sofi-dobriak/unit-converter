const areaConverters = {
  'mm2-to-cm2': v => v / 100,
  'cm2-to-mm2': v => v * 100,
  'cm2-to-m2': v => v / 10_000,
  'm2-to-cm2': v => v * 10_000,
  'm2-to-km2': v => v / 1_000_000,
  'km2-to-m2': v => v * 1_000_000,
  'm2-to-ft2': v => v * 10.764,
  'ft2-to-m2': v => v / 10.764,
};

export function areaConverter(value, type) {
  if (!Number.isFinite(value)) return null;
  return areaConverters[type](value);
}
