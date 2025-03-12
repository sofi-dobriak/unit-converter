const volumeConverters = {
  'mm3-to-cm3': v => v / 1000,
  'cm3-to-mm3': v => v * 1000,
  'cm3-to-m3': v => v / 1_000_000,
  'm3-to-cm3': v => v * 1_000_000,
  'l-to-cm3': v => v * 1000,
  'cm3-to-l': v => v / 1000,
  'm3-to-l': v => v * 1000,
  'l-to-m3': v => v / 1000,
};

export function covertVolume(value, type) {
  if (!Number.isFinite(value)) return null;
  return volumeConverters[type](value);
}
