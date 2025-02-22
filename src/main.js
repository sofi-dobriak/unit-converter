// =========== TEMP ===========

import { refs } from './js/refs';
import './js/show-form';
import { showForms } from './js/show-form';
import { handleReplaceButtonClick } from './js/replace-button';
import { handleTemperatureInput } from './js/handlers';

// ===== TEMPERATURE =====

document.addEventListener('DOMContentLoaded', () => {
  Object.values(refs).forEach(ref => {
    if (ref instanceof HTMLInputElement) {
      ref.addEventListener('input', handleTemperatureInput);
    }
  });
});

// ===== GENERAL =====

const triggerButton = document.querySelector('.js-converter-trigger-button');
triggerButton.addEventListener('click', showForms);

const replaceButton = document.querySelector('.js-replace-button');
replaceButton.addEventListener('click', handleReplaceButtonClick);
