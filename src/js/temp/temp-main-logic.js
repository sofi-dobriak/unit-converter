import { handleTemperatureInput } from './handlers';
import { showForm } from './show-form';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.temp-input').forEach(input => {
    input.addEventListener('input', handleTemperatureInput);
  });
});

const triggerButton = document.querySelector('.js-converter-trigger-button');
triggerButton.addEventListener('click', showForm);
