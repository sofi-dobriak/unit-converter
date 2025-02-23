export const refs = {
  tempForm: document.querySelector('.js-temp-form'),
  fahrenheitToCelsiusInput: document.querySelector(
    '[data-convert-type="F-to-C"]'
  ),
  celsiusToFarenheitInput: document.querySelector(
    '[data-convert-type="C-to-F"]'
  ),
  fahrenheitToKelvinInput: document.querySelector(
    '[data-convert-type="F-to-K"]'
  ),
  kelvinToFarenheitInput: document.querySelector(
    '[data-convert-type="K-to-F"]'
  ),
  celsiusToKelvinInput: document.querySelector('[data-convert-type="C-to-K"]'),
  kelvinToCelsiusInput: document.querySelector('[data-convert-type="K-to-C"]'),

  triggerButton: document.querySelector('.js-temp-trigger-button'),
};
