export function massConvert(value, type) {
  if (isNaN(value) || value === '') return;

  switch (type) {
    case 'gram-to-kilogram':
      return gramToKilogram(value);
    case 'kilogram-to-gram':
      return kilogramToGram(value);
    case 'kilogram-to-tonne':
      return kilogramToTonne(value);
    case 'tonne-to-kilogram':
      return tonneToKilogram(value);
    default:
      return;
  }
}

function gramToKilogram(grams) {
  const kilograms = grams / 1000;
  return kilograms;
}

function kilogramToGram(kilograms) {
  const grams = kilograms * 1000;
  return grams;
}

function kilogramToTonne(kilograms) {
  const tonnes = kilograms / 1000;
  return tonnes;
}

function tonneToKilogram(tonnes) {
  const kilograms = tonnes * 1000;
  return kilograms;
}
