import { handleTemperatureInput } from './handlers';
import { showTempForm } from './show-form';
import { refs } from './refs';

document.addEventListener('DOMContentLoaded', () => {
  refs.tempForm.addEventListener('input', e => {
    if (e.target.classList.contains('temp-input')) {
      handleTemperatureInput(e);
    }
  });
});

refs.triggerButton.addEventListener('click', showTempForm);
