const landsConverters = {
  'sot-to-m2': v => v * 100,
  'm2-to-sot': v => v / 100,
  'm2-to-ha': v => v / 10_000,
  'ha-to-m2': v => v * 10_000,
  'm2-to-acre': v => v / 4046.86,
  'acre-to-m2': v => v * 4046.86,
  'acre-to-hectare': v => v / 2.471,
  'hectare-to-acre': v => v * 2.471,
};

export function landConvert(value, type) {
  if (!Number.isFinite(value)) return null;
  return landsConverters[type](value);
}
