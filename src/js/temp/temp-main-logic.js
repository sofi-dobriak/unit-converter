import { handleTemperatureInput } from './handlers';
import { showTempForm } from './show-form';
import { refs } from './refs';

document.addEventListener('DOMContentLoaded', () => {
  const tempForm = document.querySelector('.temp-form');

  tempForm.addEventListener('input', e => {
    if (e.target.classList.contains('temp-input')) {
      handleTemperatureInput(e);
    }
  });
});

refs.triggerButton.addEventListener('click', showTempForm);
