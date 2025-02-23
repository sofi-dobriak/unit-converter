export function areaConvert(value, type) {
  if (isNaN(value) || value === '') return;

  switch (type) {
    case 'mm2-to-cm2':
      return mm2ToCm2(value);
    case 'cm2-to-mm2':
      return cm2ToMm2(value);
    case 'cm2-to-m2':
      return cm2ToM2(value);
    case 'm2-to-cm2':
      return m2ToCm2(value);
    case 'm2-to-km2':
      return m2ToKm2(value);
    case 'km2-to-m2':
      return km2ToM2(value);
    case 'm2-to-ft2':
      return m2ToFt2(value);
    case 'ft2-to-m2':
      return ft2ToM2(value);
    default:
      return '';
  }
}

function mm2ToCm2(mm2) {
  const cm2 = mm2 / 100;
  return cm2;
}

function cm2ToMm2(cm2) {
  const mm2 = cm2 * 100;
  return mm2;
}

function cm2ToM2(cm2) {
  const m2 = cm2 / 10_000;
  return m2;
}

function m2ToCm2(m2) {
  const cm2 = m2 * 10_000;
  return cm2;
}

function m2ToKm2(m2) {
  const km2 = m2 / 1_000_000;
  return km2;
}

function km2ToM2(km2) {
  const m2 = km2 * 1_000_000;
  return m2;
}

function m2ToFt2(m2) {
  const ft2 = m2 * 10.764;
  return ft2;
}

function ft2ToM2(ft2) {
  const m2 = ft2 / 10.764;
  return m2;
}
