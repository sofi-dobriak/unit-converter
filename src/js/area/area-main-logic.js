import { showForms } from './show-area-form';
import { refs } from './refs';
import { handleAreaInput } from './handlers';

document.addEventListener('DOMContentLoaded', () => {
  refs.areaForm.addEventListener('input', e => {
    if (e.target.classList.contains('area-input')) {
      handleAreaInput(e);
    }
  });
});

refs.areaTriggerButton.addEventListener('click', showForms);
