export const refs = {
  landForm: document.querySelector('.js-land-form'),

  sotkaToM2: document.querySelector('[data-convert-type="sot-to-m2"]'),
  m2ToSotka: document.querySelector('[data-convert-type="m2-to-sot"]'),

  m2ToHectare: document.querySelector('[data-convert-type="m2-to-ha"]'),
  hectareToM2: document.querySelector('[data-convert-type="ha-to-m2"]'),

  m2ToAcre: document.querySelector('[data-convert-type="m2-to-acre"]'),
  acreToM2: document.querySelector('[data-convert-type="acre-to-m2"]'),

  acreToHectare: document.querySelector(
    '[data-convert-type="acre-to-hectare"]'
  ),
  hectareToAcre: document.querySelector(
    '[data-convert-type="hectare-to-acre"]'
  ),

  landTriggerButton: document.querySelector('.js-land-trigger-button'),
};
