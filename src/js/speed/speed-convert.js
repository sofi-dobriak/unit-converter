const speedConverts = {
  'm/sec-to-km/h': v => v * 3.6,
  'km/h-to-m/sec': v => v / 3.6,
  'km/h-to-mi/h': v => v * 0.621371,
  'mi/h-to-km/h': v => v * 1.60934,
};

export function speedConvert(value, type) {
  if (!Number.isFinite(value)) return null;
  return speedConverts[type](value);
}
