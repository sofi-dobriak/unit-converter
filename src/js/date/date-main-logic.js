import { refs } from './refs';
import { showForms } from './date-show-form';
import { handleDateFormInput } from './handlers';

document.addEventListener('DOMContentLoaded', () => {
  refs.dateForm.addEventListener('input', e => {
    if (e.target.classList.contains('date-input')) {
      handleDateFormInput(e);
    }
  });
});

refs.dateTriggerButton.addEventListener('click', showForms);
