export function covertVolume(value, type) {
  if (isNaN(value) || value === '') return;

  switch (type) {
    case 'mm3-to-cm3':
      return mm3ToCm3(value);
    case 'cm3-to-mm3':
      return cm3ToMm3(value);
    case 'cm3-to-m3':
      return cm3ToM3(value);
    case 'm3-to-cm3':
      return m3ToCm3(value);
    case 'l-to-cm3':
      return literToCm3(value);
    case 'cm3-to-l':
      return cm3ToLiter(value);
    case 'm3-to-l':
      return m3ToLiter(value);
    case 'l-to-m3':
      return literToM3(value);
  }
}

function mm3ToCm3(mm3) {
  const cm3 = mm3 / 1000;
  return cm3;
}

function cm3ToMm3(cm3) {
  const mm3 = cm3 * 1000;
  return mm3;
}

function cm3ToM3(cm3) {
  const m3 = cm3 / 1_000_000;
  return m3;
}

function m3ToCm3(m3) {
  const cm3 = m3 * 1_000_000;
  return cm3;
}

function literToCm3(liter) {
  const cm3 = liter * 1000;
  return cm3;
}

function cm3ToLiter(cm3) {
  const liter = cm3 / 1000;
  return liter;
}

function m3ToLiter(m3) {
  const liter = m3 * 1000;
  return liter;
}

function literToM3(liter) {
  const m3 = liter / 1000;
  return m3;
}
