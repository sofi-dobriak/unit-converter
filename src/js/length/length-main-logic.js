import { showForms } from './show-len-form';
import { handleLengthInput } from './handlers';

document.addEventListener('DOMContentLoaded', () => {
  const lengthForm = document.querySelector('.len-form');

  lengthForm.addEventListener('input', e => {
    if (e.target.classList.contains('len-input')) {
      handleLengthInput(e);
    }
  });
});

const lenTriggerButton = document.querySelector('.js-len-trigger-button');
lenTriggerButton.addEventListener('click', showForms);
