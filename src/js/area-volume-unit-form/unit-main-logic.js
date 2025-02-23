import { refs } from './refs';
import { showForms } from './unit-show-form';
import { handleUnitFormInput } from './handlers';

document.addEventListener('DOMContentLoaded', () => {
  refs.unitForm.addEventListener('input', e => {
    if (e.target.classList.contains('area-volume-input')) {
      handleUnitFormInput(e);
    }
  });
});

refs.unitTriggerButton.addEventListener('click', showForms);
