export function landConvert(value, type) {
  if (isNaN(value) || value === '') return;

  switch (type) {
    case 'sot-to-m2':
      return sotkaToM2(value);
    case 'm2-to-sot':
      return m2ToSotka(value);
    case 'm2-to-ha':
      return m2ToHectare(value);
    case 'ha-to-m2':
      return hectareToM2(value);
    case 'm2-to-acre':
      return m2ToAcre(value);
    case 'acre-to-m2':
      return acreToM2(value);
    case 'acre-to-hectare':
      return acreToHectare(value);
    case 'hectare-to-acre':
      return hectareToAcre(value);
  }
}

function sotkaToM2(sotka) {
  const m2 = sotka * 100;
  return m2;
}

function m2ToSotka(m2) {
  const sotka = m2 / 100;
  return sotka;
}

function m2ToHectare(m2) {
  const hectare = m2 / 10_000;
  return hectare;
}

function hectareToM2(hectare) {
  const m2 = hectare * 10_000;
  return m2;
}

function m2ToAcre(m2) {
  const acre = m2 / 4046.86;
  return acre;
}

function acreToM2(acre) {
  const m2 = acre * 4046.86;
  return m2;
}

function acreToHectare(acre) {
  const hectare = acre / 2.471;
  return hectare;
}

function hectareToAcre(hectare) {
  const acre = hectare * 2.471;
  return acre;
}
