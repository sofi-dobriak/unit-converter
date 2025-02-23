import { showForms } from './show-area-form';
import { refs } from './refs';
import { handleAreaInput } from './handlers';

document.addEventListener('DOMContentLoaded', () => {
  const areaForm = document.querySelector('.js-area-form');

  areaForm.addEventListener('input', e => {
    if (e.target.classList.contains('area-input')) {
      handleAreaInput(e);
    }
  });
});

refs.areaTriggerButton.addEventListener('click', showForms);
