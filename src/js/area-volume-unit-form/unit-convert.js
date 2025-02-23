export function unitConvert(value, type) {
  if (isNaN(value) || value === '') return;

  switch (type) {
    case 'unit-to-square':
      return unitToSquare(value);

    case 'square-to-unit':
      return squareToUnit(value);

    case 'unit-to-cubic':
      return unitToCubic(value);

    case 'cubic-to-unit':
      return cubicToUnit(value);
  }
}

function unitToSquare(unit) {
  return unit ** 2;
}

function squareToUnit(squareUnit) {
  return Math.sqrt(squareUnit);
}

function unitToCubic(unit) {
  return unit ** 3;
}

function cubicToUnit(cubicUnit) {
  return Math.cbrt(cubicUnit);
}
