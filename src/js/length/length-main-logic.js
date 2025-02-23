import { refs } from './refs';
import { showForms } from './show-len-form';
import { handleLengthInput } from './handlers';

document.addEventListener('DOMContentLoaded', () => {
  refs.lenForm.addEventListener('input', e => {
    if (e.target.classList.contains('len-input')) {
      handleLengthInput(e);
    }
  });
});

refs.lenTriggerButton.addEventListener('click', showForms);
