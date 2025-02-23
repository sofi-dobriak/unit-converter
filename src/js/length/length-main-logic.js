import { showForms } from './show-len-form';
import { handleLengthInput } from './handlers';
import { refs } from './refs';

document.addEventListener('DOMContentLoaded', () => {
  const lengthForm = document.querySelector('.len-form');

  lengthForm.addEventListener('input', e => {
    if (e.target.classList.contains('len-input')) {
      handleLengthInput(e);
    }
  });
});

refs.lenTriggerButton.addEventListener('click', showForms);
