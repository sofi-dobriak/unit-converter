export const refs = {
  speedForm: document.querySelector('.js-speed-form'),

  meterPerSecToKilometerPerHour: document.querySelector(
    '[data-convert-type="m/sec-to-km/h"]'
  ),
  kilometerPerHourToMeterPerSec: document.querySelector(
    '[data-convert-type="km/h-to-m/sec"]'
  ),

  kilometerPerHourToMilePerHour: document.querySelector(
    '[data-convert-type="km/h-to-mi/h"]'
  ),
  milePerHourToKilometerPerHour: document.querySelector(
    '[data-convert-type="mi/h-to-km/h"]'
  ),

  speedTriggerButton: document.querySelector('.js-speed-trigger-button'),
};
