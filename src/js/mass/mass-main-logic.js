import { showForms } from './mass-show-form';
import { refs } from './refs';
import { handleMassFormInput } from './handlers';

document.addEventListener('DOMContentLoaded', () => {
  refs.massForm.addEventListener('input', e => {
    if (e.target.classList.contains('mass-input')) {
      handleMassFormInput(e);
    }
  });
});

refs.massTriggerButton.addEventListener('click', showForms);
