import { handleTemperatureInput } from './handlers';
import { showTempForm } from './show-form';

document.addEventListener('DOMContentLoaded', () => {
  const tempForm = document.querySelector('.temp-form');

  tempForm.addEventListener('input', e => {
    if (e.target.classList.contains('temp-input')) {
      handleTemperatureInput(e);
    }
  });
});

const triggerButton = document.querySelector('.js-temp-trigger-button');
triggerButton.addEventListener('click', showTempForm);
