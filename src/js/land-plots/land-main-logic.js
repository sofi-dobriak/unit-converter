import { refs } from './refs';
import { showForms } from './show-lend-form';
import { handleLandFormInput } from './hendlers';

document.addEventListener('DOMContentLoaded', () => {
  refs.landForm.addEventListener('input', e => {
    if (e.target.classList.contains('land-input')) {
      handleLandFormInput(e);
    }
  });
});

refs.landTriggerButton.addEventListener('click', showForms);
