export function speedConvert(value, type) {
  if (isNaN(value) || value === '') return;

  switch (type) {
    case 'm/sec-to-km/h':
      return meterPerSecToKilometerPerHour(value);
    case 'km/h-to-m/sec':
      return kilometerPerHourToMeterPerSec(value);
    case 'km/h-to-mi/h':
      return kilometerPerHourToMilePerHour(value);
    case 'mi/h-to-km/h':
      return milePerHourToKilometerPerHour(value);
    default:
      return;
  }
}

function meterPerSecToKilometerPerHour(meterPerSec) {
  const kilometerPerHour = meterPerSec * 3.6;
  return kilometerPerHour;
}

function kilometerPerHourToMeterPerSec(kilometerPerHour) {
  const meterPerSec = kilometerPerHour / 3.6;
  return meterPerSec;
}

function kilometerPerHourToMilePerHour(kilometerPerHour) {
  const milePerHour = kilometerPerHour * 0.621371;
  return milePerHour;
}

function milePerHourToKilometerPerHour(milePerHour) {
  const kilometerPerHour = milePerHour / 0.621371;
  return kilometerPerHour;
}
