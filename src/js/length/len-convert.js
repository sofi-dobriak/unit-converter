const lenConverts = {
  'mm-to-cm': v => v / 10,
  'cm-to-mm': v => v * 10,
  'cm-to-m': v => v / 100,
  'm-to-cm': v => v * 100,
  'm-to-km': v => v / 1000,
  'km-to-m': v => v * 1000,
  // 'cm-to-inch': v => v / 2.54,
  // 'inch-to-cm': v => v * 2.54,
  // 'm-to-ft': v => v * 3.28084,
  // 'ft-to-m': v => v / 3.28084,
  // 'm-to-yd': v => v * 1.09361,
  // 'yd-to-m': v => v / 1.09361,
  // 'km-to-mi': v => v / 1.60934,
  // 'mi-to-km': v => v * 1.60934,
};

export function lenConvert(value, type) {
  if (!Number.isFinite(value)) return null;
  return lenConverts[type](value);
}
