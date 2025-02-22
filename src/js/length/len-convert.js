export function lenConvert(value, type) {
  if (isNaN(value) || value === '') return;

  switch (type) {
    case 'mm-to-cm':
      return mmToCm(value);
    case 'cm-to-mm':
      return cmToMM(value);
    case 'cm-to-m':
      return cmToMeter(value);
    case 'm-to-cm':
      return meterToCm(value);
    case 'm-to-km':
      return meterToKm(value);
    case 'km-to-m':
      return kmToMeter(value);
    case 'cm-to-inch':
      return cmToInch(value);
    case 'inch-to-cm':
      return inchToCm(value);
    case 'm-to-ft':
      return meterToFoot(value);
    case 'ft-to-m':
      return footToMeter(value);
    case 'm-to-yd':
      return meterToYard(value);
    case 'yd-to-m':
      return yardToMeter(value);
    case 'km-to-mi':
      return kmToMile(value);
    case 'mi-to-km':
      return mileToKm(value);
    default:
      return '';
  }
}

function mmToCm(mm) {
  const cm = mm / 10;
  return cm;
}

function cmToMM(cm) {
  const mm = cm * 10;
  return mm;
}

function cmToMeter(cm) {
  const meter = cm / 100;
  return meter;
}

function meterToCm(meter) {
  const cm = meter * 100;
  return cm;
}

function meterToKm(meter) {
  const km = meter / 1000;
  return km;
}

function kmToMeter(km) {
  const meter = km * 1000;
  return meter;
}

function cmToInch(cm) {
  const inch = cm / 2.54;
  return inch;
}

function inchToCm(inch) {
  const cm = inch * 2.54;
  return cm;
}

function meterToFoot(m) {
  const foot = m * 3.28084;
  return foot;
}

function footToMeter(foot) {
  const meter = foot / 3.28084;
  return meter;
}

function meterToYard(meter) {
  const yard = meter * 1.09361;
  return yard;
}

function yardToMeter(yard) {
  const meter = yard / 1.09361;
  return meter;
}

function kmToMile(km) {
  const mile = km / 1.60934;
  return mile;
}

function mileToKm(mile) {
  const km = mile * 1.60934;
  return km;
}
